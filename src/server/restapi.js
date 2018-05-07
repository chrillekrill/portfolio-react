const express = require('express');
var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : 'secret',
  user     : 'secret',
  password : 'secret',
  database : 'secret'
});

const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);

  let res;

app.get('/comment', function (req, res) {
  connection.query('SELECT * FROM `comment`', [], function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
  results.forEach((item, index) => {
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

console.log(`App listening on port ${port}`);
