const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: "", 
  database: 'Login_Page',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else if (results.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Unauthorized');
    }
  });
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  
  connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Signup successful');
    }
  });
});
