const E_ROOMS = {
  STUDY: {
      name: "Study",
      type: "room",
      rightSquare: "hallway1",
      leftSquare: null,
      downSquare: "hallway3",
      upSquare: null,
      secretPassage: "Kitchen"
  },
  HALLWAY1: {
      name: "hallway1",
      type: "hallway",
      rightSquare: "Hall",
      leftSquare: "Study",
      downSquare: "hallway4",
      upSquare: null,
      secretPassage: null
  },
  HALL: {
      name: "Hall",
      type: "room",
      rightSquare: "hallway2",
      leftSquare: "hallway1",
      downSquare: "hallway4",
      upSquare: null,
      secretPassage: null
  },
  HALLWAY2: {
      name: "hallway2",
      type: "hallway",
      rightSquare: "Lounge",
      leftSquare: "Hall",
      downSquare: null,
      upSquare: null,
      secretPassage: null
  },
  LOUNGE: {
      name: "Lounge",
      type: "room",
      rightSquare: null,
      leftSquare: "hallway2",
      downSquare: "hallway5",
      upSquare: null,
      secretPassage: "Conservatory"
  },
  HALLWAY3: {
      name: "hallway3",
      type: "hallway",
      rightSquare: null,
      leftSquare: null,
      downSquare: "Library",
      upSquare: "Study",
      secretPassage: null
  },
  HALLWAY4: {
      name: "hallway4",
      type: "hallway",
      rightSquare: null,
      leftSquare: null,
      downSquare: "Billiard Room",
      upSquare: "Hall",
      secretPassage: null
  },
  HALLWAY5: {
      name: "hallway5",
      type: "hallway",
      rightSquare: null,
      leftSquare: null,
      downSquare: "Dining Room",
      upSquare: "Lounge",
      secretPassage: null
  },
  LIBRARY: {
      name: "Library",
      type: "room",
      rightSquare: "hallway6",
      leftSquare: null,
      downSquare: "hallway8",
      upSquare: "hallway3",
      secretPassage: null
  },
  HALLWAY6: {
      name: "hallway6",
      type: "hallway",
      rightSquare: "Billiard Room",
      leftSquare: "Library",
      downSquare: null,
      upSquare: null,
      secretPassage: null
  },
  BILLIARDROOM: {
      name: "Billiard Room",
      type: "room",
      rightSquare: "hallway7",
      leftSquare: "hallway6",
      downSquare: "hallway9",
      upSquare: "hallway4",
      secretPassage: null
  },
  HALLWAY7: {
      name: "hallway7",
      type: "hallway",
      rightSquare: "Dining Room",
      leftSquare: "Billiard Room",
      downSquare: null,
      upSquare: null,
      secretPassage: null
  },
  DININGROOM: {
      name: "Dining Room",
      type: "room",
      rightSquare: null,
      leftSquare: "hallway7",
      downSquare: "hallway10",
      upSquare: "hallway5",
      secretPassage: null
  },
  HALLWAY8: {
      name: "hallway8",
      type: "hallway",
      rightSquare: null,
      leftSquare: null,
      downSquare: "Conservatory",
      upSquare: "Library",
      secretPassage: null
  },
  HALLWAY9: {
      name: "hallway9",
      type: "hallway",
      rightSquare: null,
      leftSquare: null,
      downSquare: "Ballroom",
      upSquare: "Billiard Room",
      secretPassage: null
  },
  HALLWAY10: {
      name: "hallway10",
      type: "hallway",
      rightSquare: null,
      leftSquare: null,
      downSquare: "Kitchen",
      upSquare: "Dining Room",
      secretPassage: null
  },
  CONSERVATORY: {
      name: "Conservatory",
      type: "room",
      rightSquare: "hallway11",
      leftSquare: null,
      downSquare: null,
      upSquare: "hallway8",
      secretPassage: "Lounge"
  },
  HALLWAY11: {
      name: "hallway11",
      type: "hallway",
      rightSquare: "Ballroom",
      leftSquare: "Conservatory",
      downSquare: null,
      upSquare: null,
      secretPassage: null
  },
  BALLROOM: {
      name: "Ballroom",
      type: "room",
      rightSquare: "hallway12",
      leftSquare: "hallway11",
      downSquare: null,
      upSquare: "hallway9",
      secretPassage: null
  },
  HALLWAY12: {
      name: "hallway12",
      type: "hallway",
      rightSquare: "Kitchen",
      leftSquare: "Ballroom",
      downSquare: null,
      upSquare: null,
      secretPassage: null
  },
  KITCHEN: {
      name: "Kitchen",
      type: "room",
      rightSquare: null,
      leftSquare: "hallway12",
      downSquare: null,
      upSquare: "hallway10",
      secretPassage: "Study"
  }

};

const E_WEAPONS = {
  ROPE: "Rope",
  PIPE: "Pipe",
  KNIFE: "Knife",
  WRENCH: "Wrench",
  CANDLESTICK: "Candlestick",
  REVOLVER: "Revolver"
}

const E_CHARACTERS = {
  COLONEL: {
      name: "Colonel Mustard", location: E_ROOMS.HALLWAY5, taken: false
  },
  PEACOCK: {
      name: "Mrs. Peacock", location: E_ROOMS.HALLWAY8, taken: false
  },
  GREEN: {
      name: "Reverend Green", location: E_ROOMS.HALLWAY11, taken: false
  },
  PLUM: {
      name: "Professor Plum", location: E_ROOMS.HALLWAY3, taken: false
  },
  SCARLET: {
      name: "Miss Scarlet", location: E_ROOMS.HALLWAY2, taken: false
  },
  WHITE: {
      name: "Mrs. White", location: E_ROOMS.HALLWAY12, taken: false
  }
}

const E_CARDS = {
  COLONEL: {
      name: E_CHARACTERS.COLONEL.name, type: "character", number: 1
  },
  PEACOCK: {
      name: E_CHARACTERS.PEACOCK.name, type: "character", number: 2
  },
  GREEN: {
      name: E_CHARACTERS.GREEN.name, type: "character", number: 3
  },
  PLUM: {
      name: E_CHARACTERS.PLUM.name, type: "character", number: 4
  },
  SCARLET: {
      name: E_CHARACTERS.SCARLET.name, type: "character", number: 5
  },
  WHITE: {
      name: E_CHARACTERS.WHITE.name, type: "character", number: 6
  },
  STUDY: {
      name: E_ROOMS.STUDY.name, type: "room", number: 1
  },
  HALL: {
      name: E_ROOMS.HALL.name, type: "room", number: 2
  },
  LOUNGE: {
      name: E_ROOMS.LOUNGE.name, type: "room", number: 3
  },
  LIBRARY: {
      name: E_ROOMS.LIBRARY.name, type: "room", number: 4
  },
  BILLIARDROOM: {
      name: E_ROOMS.BILLIARDROOM.name, type: "room", number: 5
  },
  DININGROOM: {
      name: E_ROOMS.DININGROOM.name, type: "room", number: 6
  },
  CONSERVATORY: {
      name: E_ROOMS.CONSERVATORY.name, type: "room", number: 7
  },
  BALLROOM: {
      name: E_ROOMS.BALLROOM.name, type: "room", number: 8
  },
  KITCHEN: {
      name: E_ROOMS.KITCHEN.name, type: "room", number: 9
  },
  ROPE: { 
      name: E_WEAPONS.ROPE, type: "weapon", number: 1
  },
  PIPE: {
      name: E_WEAPONS.PIPE, type: "weapon", number: 2
  },
  KNIFE: {
      name: E_WEAPONS.KNIFE, type: "weapon", number: 3
  },
  WRENCH: {
      name: E_WEAPONS.WRENCH, type: "weapon", number: 4
  },
  CANDLESTICK: {
      name: E_WEAPONS.CANDLESTICK, type: "weapon", number: 5
  },
  REVOLVER: {
      name: E_WEAPONS.REVOLVER, type: "weapon", number: 6
  }
}

const E_TURNACTIONS = {
  MOVE: "move",
  SUGGEST: "suggest",
  ACCUSE: "accuse",
  REFUTE: "refute"
}

const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const MongoClient = require('mongodb').MongoClient;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const uri = process.env.DB_URI;

const router = require('./router/router');

playerClientMap = new Map();
cardAllocation = new Map
serverCharacters = null;
dealTo = 0;
turnOrder = new Array;
currentTurn = 0;
refuteCounter = 0;
currentTurnAction = E_TURNACTIONS.MOVE;

murderer = "";
murderLocation = "";
murderWeapon = "";

// serve static build files to clients
app.use(router);

/*Database functions are currently unused
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
*/

//Increment turn order to next character, then return that character
function getNextTurnCharacter(){
    let nextTurn = currentTurn + 1;
    if(nextTurn >= turnOrder.length){
      currentTurn = 0;
      return turnOrder[currentTurn];
    }
    else{
      currentTurn = nextTurn;
      return turnOrder[currentTurn];
    }
}

function getCurrentTurnCharacter(){
  return turnOrder[currentTurn];
}

//Return next turn action (currently only returns "move")
function getNextTurnAction(){
  let nextRefute = 0;
  switch(currentTurnAction)
  {
    case E_TURNACTIONS.MOVE:
      serverCharacters.find((currentCharacter, index) => {
        if (currentCharacter.name === getCurrentTurnCharacter()) {
          currentCharacterActual = serverCharacters[index];
          return true;
        }
        return false;
      });
      if (currentCharacterActual.location.type === "hallway") 
      {
        currentTurnAction = E_TURNACTIONS.ACCUSE;
        break;
      }
      else
      {
        currentTurnAction = E_TURNACTIONS.SUGGEST;
        break;
      }
    case E_TURNACTIONS.SUGGEST:
      refuteCache = currentTurn;
      currentTurnAction = E_TURNACTIONS.REFUTE;
      break;
    case E_TURNACTIONS.ACCUSE:
      console.log("accuse to move");
      currentTurnAction = E_TURNACTIONS.MOVE;
      break;
    case E_TURNACTIONS.REFUTE:
      console.log(refuteCache);
      console.log(currentTurn);
      if(refuteCache === currentTurn)
      {
        currentTurnAction = E_TURNACTIONS.ACCUSE;
        break;
      }
      else
      {
        currentTurnAction = E_TURNACTIONS.REFUTE;
        break;
      }
  }
}

function cardSetup(){
   let charCardIndices = [1, 2, 3, 4, 5, 6];
   let roomCardIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   let weaponCardIndices = [1, 2, 3, 4, 5, 6];
   charCardIndices = shuffle(charCardIndices);
   roomCardIndices = shuffle(roomCardIndices);
   weaponCardIndices = shuffle(weaponCardIndices);
   for(let item in E_CARDS)
   {
      if(E_CARDS[item].number === charCardIndices[0] && E_CARDS[item].type === "character")
      {
        murderer = E_CARDS[item].name;
      }
      if(E_CARDS[item].number === roomCardIndices[0] && E_CARDS[item].type === "room")
      {
        murderLocation = E_CARDS[item].name;
      }
      if(E_CARDS[item].number === weaponCardIndices[0] && E_CARDS[item].type === "weapon")
      {
        murderWeapon = E_CARDS[item].name;
      }
   }
   for(let item in E_CARDS)
   {
      for(x = 1; x <= 8; x++)
      {
        if(E_CARDS[item].number === charCardIndices[x] && E_CARDS[item].type === "character")
        {
          dealCardToNextPlayer(item);
        }
        if(E_CARDS[item].number === roomCardIndices[x] && E_CARDS[item].type === "room")
        {
          dealCardToNextPlayer(item);
        }
        if(E_CARDS[item].number === weaponCardIndices[x] && E_CARDS[item].type === "weapon")
        {
          dealCardToNextPlayer(item);
        }
      }
   }
}

function dealCardToNextPlayer(cardName)
{
  io.sockets.emit("dealCard", E_CARDS[cardName], turnOrder[dealTo])
  let nextDeal = dealTo + 1;
  if(nextDeal >= turnOrder.length){
    dealTo = 0;
  }
  else{
    dealTo = nextDeal;
  }
}

//Implement Fisher-Yates shuffle
function shuffle(array) {
  var copy = [], n = array.length, i;
  while (n){
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }
  return copy;
}

// This creates our socket using the instance of the server
io.on("connection", socket => {
    console.log("New client connected " + socket.id);

    // initial_data can be used to send state to new clients
    socket.on("initialData", (state) => {
      console.log("Initial state");

      // If server state isn't set yet, initialize serverCharacters to match client (kind of hacky, can remove after database is incorporated)
      if(serverCharacters == null)
      {
        serverCharacters = state.characters;
      }

      let newMessage = "";
      if(getCurrentTurnCharacter() == null)
      {
        newMessage = "No characters in turn order yet";
      }
      else
      {
        newMessage = getCurrentTurnCharacter() + " to " + currentTurnAction;
      }
      io.sockets.emit("updateCharacters", serverCharacters)
      io.sockets.emit("turnChange", getCurrentTurnCharacter(), currentTurnAction, newMessage);

      //TODO: Add database retrieval 

      //retrieveGameState().then(
      //  state => {io.sockets.emit("get_data", state)});
    })

    socket.on("startGame", (state) => {
      console.log("Start game pressed");
      cardSetup();
      console.log(murderer + " " + murderLocation + " " + murderWeapon);
    })

    // playerMove is called when someone moves
    socket.on("playerMove", (characters) => {
      console.log("Player moved");
      serverCharacters = characters;
      console.log(serverCharacters);
      // TODO: Add database update
      
      getNextTurnAction();
      let newMessage = getCurrentTurnCharacter() + " to " + currentTurnAction;

      io.sockets.emit("updateCharacters", serverCharacters);
      io.sockets.emit("turnChange", getCurrentTurnCharacter(), currentTurnAction, newMessage);
    });

    // endTurn is called when someone ends their turn (without)
    socket.on("endTurn", () => {
      console.log("Player ended turn");

      // TODO: Add database update
      
      currentTurnAction = E_TURNACTIONS.MOVE;
      let nextCharacter = getNextTurnCharacter();
      let newMessage = nextCharacter + " to " + currentTurnAction;

      io.sockets.emit("turnChange", nextCharacter, currentTurnAction, newMessage);
    });

    // playerAccuse is called when someone accuses
    socket.on("playerAccuse", (character, characterLocation, weapon) => {
      console.log("Player accused");

      // TODO: Add database update
      console.log(character);
      console.log(characterLocation);
      console.log(weapon);
      console.log(murderer);
      console.log(murderLocation);
      console.log(murderWeapon);

      if(character === murderer && characterLocation === murderLocation && weapon === murderWeapon)
      {
        let newMessage = "Correct accusation! " + getCurrentTurnCharacter() + " wins. " + murderer + " did it in the " + murderLocation + " with the " + murderWeapon;
        io.sockets.emit("turnChange", null, null, newMessage);
      }
      else
      {
        let newMessage = "Failed accusation! " + getCurrentTurnCharacter() + " is eliminated. ";
        // TODO: REMOVE PLAYER FROM TURN ORDER
        currentTurnAction = E_TURNACTIONS.MOVE;
        let nextCharacter = getNextTurnCharacter();
        newMessage = newMessage + nextCharacter + " to " + currentTurnAction;
        io.sockets.emit("turnChange", nextCharacter, currentTurnAction, newMessage);
      }
    });

    // playerSuggest is called when someone suggests
    socket.on("playerSuggest", (character, characterLocation, weapon) => {
      console.log("Player suggested");

      // TODO: Add database update
      
      serverCharacters.find((movedCharacter, index) => {
        if (movedCharacter.name === character) {
          const character = serverCharacters[index];
          character.location = characterLocation;
          return true;
        }
        return false;
      });

      let newMessage = getCurrentTurnCharacter() + " suggests that " + character + " did it in the " + characterLocation.name + " with the " + weapon;

      getNextTurnAction();
      let nextCharacter = getNextTurnCharacter();

      newMessage = newMessage + ". " + nextCharacter + " can refute!";

      io.sockets.emit("updateCharacters", serverCharacters);
      io.sockets.emit("turnChange", nextCharacter, currentTurnAction, newMessage);
    });

    // refute is called when someone refutes
    socket.on("refute", (card) => {
      console.log("Player refuted");
      let newMessage = "";

      // TODO: Add database update
      
      if(card == null)
      {
        newMessage = getCurrentTurnCharacter() + " does not refute this suggestion. ";
      }
      else
      {
        newMessage = getCurrentTurnCharacter() + " refutes and proves that " + card + " was not involved in the murder! ";
      }

      let nextCharacter = getNextTurnCharacter();
      getNextTurnAction();

      if(currentTurnAction === E_TURNACTIONS.ACCUSE)
      {
        newMessage = newMessage + nextCharacter + " can now accuse!";
      }
      else
      {
        newMessage = newMessage + nextCharacter + " can now refute!";
      }
      
      io.sockets.emit("turnChange", nextCharacter, currentTurnAction, newMessage);
    });
    
    // linkPlayerWithClient is called when someone selects a character
    socket.on("linkPlayerWithClient", (newPlayer) => {
      console.log("Character selected");
      
      // TODO: Add database updates

      //Set new character to taken
      serverCharacters.find((takenCharacter, index) => {
        if (takenCharacter.name === newPlayer) {
          const character = serverCharacters[index];
          character.taken = true;
          serverCharacters[index] = character;
          turnOrder.push(character.name);
          return true;
        }
        return false;
      });
      
      //Set old character to not taken (if there was one)
      serverCharacters.find((freeCharacter, index) => {
        if (freeCharacter.name === playerClientMap.get(socket.id)) {
          const character = serverCharacters[index];
          character.taken = false;
          serverCharacters[index] = character;
          turnOrder.splice(turnOrder.indexOf(character.name),1);
          return true;
        }
        return false;
      });

      //Output turn order for debugging, and update player-client mappping
      turnOrder.forEach(function(item) {console.log("Turn order: " + item)});

      let newMessage = getCurrentTurnCharacter() + " to " + currentTurnAction;
      playerClientMap.delete(socket.id);
      playerClientMap.set(socket.id, newPlayer);
      io.sockets.emit("updateCharacters", serverCharacters);
      io.sockets.emit("turnChange", turnOrder[currentTurn], currentTurnAction, newMessage);
    });

    // disconnect is called when someone disconnects, freeing up their character
    socket.on('disconnect', () => {
      console.log("Client disconnected " + socket.id);
      
      // TODO: Add database updates

      //If disconnecting client had active turn, change turn
      if(turnOrder.length > 0 && turnOrder[currentTurn] === playerClientMap.get(socket.id))
      {
        io.sockets.emit("turnChange", getNextTurnCharacter(), getNextTurnAction());
      }

      //Set character to not taken from disconnected client, using player-client mapping
      if(serverCharacters != null)
      {
        serverCharacters.find((freeCharacter, index) => {
          if (freeCharacter.name === playerClientMap.get(socket.id)) {
            const character = serverCharacters[index];
            character.taken = false;
            serverCharacters[index] = character;
            turnOrder.splice(turnOrder.indexOf(character.name),1);
            return true;
          }
          return false;
        });
        
        //Output turn order for debugging, and update player-client mappping
        turnOrder.forEach(function(item) {console.log("Turn order: " + item.name)});
        
        io.sockets.emit("updateCharacters", serverCharacters);
        playerClientMap.delete(socket.id);
      }
    });
  });

// our localhost port - I think we need an env file to deploy
const port = process.env.PORT || 3001;

// setup listener on port 3001
server.listen(port, () => console.log(`Listening on port ${port}`))

