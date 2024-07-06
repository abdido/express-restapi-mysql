const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(`CREATE DATABASE ${process.env.MYSQL_DATABASE}`, function (err, result) {
    if (err) throw err;
    console.log("Database created");
    const sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  });
});