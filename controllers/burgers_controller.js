// DEPENDENCIES
var express = require("express");
var burger = require("../models/burger.js");



// ROUTING

var router = express.Router();

// Route that sends user to the home page
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handlebars = {
            burgers: data
        };
        res.render('index', handlebars);
    });
});

// Route that adds burgers
router.post("/api/burgers", function(req, res) {
    burger.insertOne([req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

// Route that updates burgers to devoured status
router.put("/api/burgers/:id", function(req, res) {
    var condition = 'id = ' + req.params.id;
    burger.updateOne(
        {
            devoured: req.body.devoured
        }, 
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});



// Export routes for server.js
module.exports = router;