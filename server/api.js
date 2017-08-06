var express = require("express");
var chirps = require("./controllers/chirps.ctrl");
var users = require("./controllers/users.ctrl");

var router = express.Router();
//AT THIS POINT THE URL IS HTTP://LOCALHOST:3000/API    
router.use('/chirps', chirps);
router.use('/users', users);

module.exports = router;