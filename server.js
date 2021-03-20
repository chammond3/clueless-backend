const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const uri = process.env.DB_URI;

const router = require('./router/router');

// serve static build files to clients
app.use(router);

//Update game started state on database
async function updateGameStarted(newState){
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
      await client.connect();
      const result = await client.db("mydb").collection("gameState")
        .updateOne({name:"PrimaryGameState"}, {$set:{started:newState}});
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

//Update server message on database
async function updateMessage(newMessage){
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
      await client.connect();
      const result = await client.db("mydb").collection("gameState")
        .updateOne({name:"PrimaryGameState"}, {$set:{message:newMessage}});
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

//Retrieve all game state from database for new client
async function retrieveGameState(){
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
      await client.connect();
      const result = await client.db("mydb").collection("gameState")
        .findOne({name:"PrimaryGameState"});
      if(result)
      {
        return {started: result.started, serverMessage: result.message};
      }
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

// This creates our socket using the instance of the server
io.on("connection", socket => {
    console.log("New client connected" + socket.id);

    // initial_data can be used to send state to new clients
    socket.on("initial_data", () => {
      console.log("Initial state");
      retrieveGameState().then(
        state => {io.sockets.emit("get_data", state)});
    })

    // change_game_state is called when start game/reset state button is pressed
    socket.on("change_game_state", (started) => {
      console.log("Change state");
      updateGameStarted(started).catch(console.error);
      io.sockets.emit("get_started", started);
    });

    // change_message is called when "send message" button is pressed
    socket.on("change_message", (message) => {
      console.log("Change message");
      updateMessage(message).catch(console.error);
      io.sockets.emit("get_message", message);
    })
  });

// our localhost port - I think we need an env file to deploy
const port = process.env.PORT || 3001;

// setup listener on port 3001
server.listen(port, () => console.log(`Listening on port ${port}`))
