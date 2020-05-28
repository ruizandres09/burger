var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//testing with simply "hello"
router.get("/", function (req, res) {
  res.render("Hello");
});
//request for burgers
// router.get("/burgers",function(req,res){
//     burger.all(function(burgerstuff))
// })

// Export routes for server.js to use.
module.exports = router;
