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

// front end then re-queries api/tables and api/waitlist. clear page, get new data, repaint with new data (way to update - instead of appending - will just keep getting longer)
// retrigger than existing logic each time you add a new table

// Create new table
app.post('/api/tables', (req,res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newTable = req.body;
    console.log(req.body);
  
    if (tables <= 5) {
      tables.push(newTable);
    } else {
      waitlist.push(newTable);
    }
    res.end();
    // closes that connection at end
  });


// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
