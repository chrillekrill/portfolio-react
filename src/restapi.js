/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

// host: crockett.highstone.biz (default port)
// l: portfolio
// p: Portfolio123

const express = require('express');
var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : 'crockett.highstone.biz',
  user     : 'portfolio',
  password : 'Portfolio123',
  database : 'korell_portfolio'
});

const app = express();
const port = 3306;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);


const capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

// todo: functions to return number of students of a class, which dates a student/teacher has depending on classes


  let res;

app.get('/comment', function (req, res) {
  connection.query('SELECT * FROM `comment`', [], function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
  results.forEach((item, index) => {
    //console.log("index: " + index + "item: " + item.time)
    results[index].time = (new Date(item.time).toLocaleDateString());
  });
  res.json(results);

});
});

app.post('/comment', function (req, res) {
  var query = "INSERT INTO ??(??,??) VALUES (?,?)";
  var inserts = ['comment', 'author', 'body', req.body.author, req.body.body];
  sql = mysql.format(query, inserts);
  query = mysql.format(query,inserts);
  connection.query(query,function(err,rows){
    if(err) {
        res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    } else {
        res.json({"Error" : false, "Message" : "Comment Added !"});
    }
});
});
// todo add classes endpoint

console.log(`App listening on port ${port}`);
