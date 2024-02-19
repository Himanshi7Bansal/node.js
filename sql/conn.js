// import mysql package
var mysql = require("mysql");

// connection object
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

// connect function
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // query
    con.query("CREATE DATABASE db", function(err, result){
        if(err) throw err;
        console.log("database created");
    })
});