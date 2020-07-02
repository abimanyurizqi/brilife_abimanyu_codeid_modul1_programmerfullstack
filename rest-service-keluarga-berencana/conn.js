const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rogerfederer",
  database: "DB_Keluarga_Berencana"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;