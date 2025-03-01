/*const { Signup } = require("../Controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;*/

const { Signup, Login } = require('../Controllers/AuthController')
const router = require('express').Router()
//const {userVerification} = require('../Middlewares/AuthMiddleware.js')
const authenticateUser = require("../Middlewares/authenticateUser");

router.post('/signup', Signup)
router.post('/login', Login)
//router.post('/homesign', userVerification)

  
module.exports = router;