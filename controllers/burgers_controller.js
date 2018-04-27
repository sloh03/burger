var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// ROUTING

// // Route that sends user to the home page
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
        // res.redirect('/');
        res.json({ id: result.insertId });
    });
});

// // Route that updates burgers to devoured status
// router.put("/burgers/:id", function(req, res) {
//     var burgerId = req.params.id;
//     burger.updateOne(burgerId, function(data) {
//         res.redirect('/');
//     })
// });
  
module.exports = router;