//Set up MySQL connection.
let mysql = require("mysql");

let connection = mysql.createConnection({

    host: "Localhost",
    port: 3306,
    user: "root",
    password: "GrandCanyon2019",
    database: "burgers_db"

});

//Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Export connection.
module.exports = connection;

