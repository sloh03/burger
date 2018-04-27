var connection = require("./connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

// ORM functions to select all, insert, and update
var orm = {

    selectAll: function(table, cb) {
        // SELECT * FROM table
        var queryString = 'SELECT * FROM ' + table;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },
    insertOne: function(table, col1, col2, vals, cb) {
        // INSERT INTO table (col1, col2) VALUES (val1, val2)
        var queryString = 'INSERT INTO ' + table;

        queryString += '(' + col1 + ', ' + col2 + ')';
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(queryString);
        });
    }
    // ,
    // updateOne: function(table, col1, val1, col2, val2, cb) {
    //     // UPDATE table SET col1 = val1 WHERE col2 = val2
    //     var queryString = 'UPDATE ' + table + ' SET ' + col1 + ' = ' + val1 + ' WHERE ' + col2 + ' = ' + val2;
    //     connection.query(queryString, function(err, result) {
    //         if (err) throw err;
    //         cb(result);
    //         console.log(queryString);
    //     });
    // }
};

module.exports = orm;
