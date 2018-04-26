var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router()

// ROUTING

// Route that sends user to the home page
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        
    })
    res.render('index');
});

// Route that adds burgers
router.post("", function(req, res) {

});

// Route that updates burgers to devoured status
router.put("", function() {

});
  

module.exports = router;