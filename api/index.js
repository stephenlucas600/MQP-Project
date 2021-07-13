const express = require('express')
const app = express();
const port = 8000;

const mysql = require('mysql');

// First you need to create a connection to the db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port : '3306',
  password: 'sammy3197',
  database: 'Organization_Database2'
});

connection.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection established');
});

connection.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.get('/organizations', (req, res) => {
	connection.query('SELECT * FROM employees', (err,rows) => {
  		if(err) throw err;


 		 console.log('Data received from Db:\n');
 		 console.log(rows);
	});
	res.send(rows)

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

