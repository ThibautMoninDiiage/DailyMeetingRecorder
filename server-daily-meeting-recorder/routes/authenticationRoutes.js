const express = require('express');
const router = express.Router();
const passport = require('passport')
const AuthenticationController = require('../controllers/authenticationController');

router.post('/register', AuthenticationController.register);
router.post('/login', AuthenticationController.login);
router.get('/checkToken', passport.authenticate('jwt', { session: false }), AuthenticationController.CheckToken);

module.exports = router;
