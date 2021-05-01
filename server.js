// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Table information
// {
//   customerName: ,
//   phoneNumber: ,
//   email: ,
//   uniqueID: ,
// },
// empty array to start - push - after checking < 5 (if...else)
const tables = [];


const waitlist = [];






// // Routes
// basic route for sending user to api page first
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'homepage.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));


// displays all tables and waitlist = 2 api calls
app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/waitlist', (req, res) => res.json(waitList));



// Create new table
app.post('/api/tables', (req,res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newTable = req.body;
  const newWaitlist = req.body;

  if (tables <= 5) {
    tables.push(newTable);
    res.json(newTable);
  } else {
    waitlist.push(newWaitlist);
  }
});


// Create New Characters - takes in JSON input
app.post('/api/characters', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
  console.log(newCharacter);

  characters.push(newCharacter);
  res.json(newCharacter);
});


// // Displays a single character, or returns false
// app.get('/api/characters/:character', (req, res) => {
//   const chosen = req.params.character;

//   console.log(chosen);

//   /* Check each character routeName and see if the same as "chosen"
//    If the statement is true, send the character back as JSON,
//    otherwise tell the user no character was found */

//   for (let i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post('/api/characters', (req, res) => {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   const newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
//   console.log(newCharacter);

//   characters.push(newCharacter);
//   res.json(newCharacter);
// });

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
