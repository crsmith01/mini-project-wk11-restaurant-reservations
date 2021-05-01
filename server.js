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

// empty arrays to start - push - after checking < 5 (if...else)
const tables = [];


const waitlist = [];






// // Routes
// basic route for sending user to api page first
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'homepage.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));


// displays all tables and waitlist = 2 api calls
app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/waitlist', (req, res) => res.json(waitlist));



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



// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
