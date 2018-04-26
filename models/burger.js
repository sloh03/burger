var orm = require("../config/orm.js");

// Call the ORM functions using burger specific input for the ORM
var burger = {

    // Select all burgers
    selectAll: function(cb) {
        // SELECT * FROM table
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // Insert new burger
    insertOne: function(newBurger, cb) {
        // INSERT INTO table (col1, col2) VALUES (val1, val2)
        orm.insertOne("burgers", "burger_name", "devoured", newBurger, false, function(res) {
            cb(res);
        });
    },
    // Update burgers devoured state to true
    updateOne: function(burgerId, cb) {
        // UPDATE table SET col1 = val1 WHERE col2 = val2
        orm.updateOne("burgers", "devoured", true, "id", burgerId, function(res) {
            cb(res);
        });
    }

}

module.exports = orm;