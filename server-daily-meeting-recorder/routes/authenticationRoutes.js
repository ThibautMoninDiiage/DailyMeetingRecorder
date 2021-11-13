const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/authenticationController');

router.post('/register', AuthenticationController.register);

module.exports = router;
