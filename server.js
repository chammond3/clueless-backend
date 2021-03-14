const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const router = require('./router/router');

// serve static build files to clients
app.use(router);

async function updateGameState(newState){
  const uri = "##########################";
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

async function retrieveGameState(){
  const uri = "##########################";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
      await client.connect();
      const result = await client.db("mydb").collection("gameState")
        .findOne({name:"PrimaryGameState"});
      if(result)
      {
        return result.started;
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
      var state = retrieveGameState();
      io.sockets.emit("get_data", state);
    })

    // change_game_state is called when button is pressed
    socket.on("change_game_state", (started) => {
      console.log("Change state");
      updateGameState(started).catch(console.error);
      io.sockets.emit("get_data", started);
    });
  });

// our localhost port - I think we need an env file to deploy
const port = process.env.PORT || 3001;

// setup listener on port 3001
server.listen(port, () => console.log(`Listening on port ${port}`))
