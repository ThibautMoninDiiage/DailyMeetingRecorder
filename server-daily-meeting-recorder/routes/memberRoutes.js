var express = require('express');
var router = express.Router();
var passport = require('passport');

const memberController = require('../controllers/memberController');

router.get('/getAllMemberByProject', memberController.getAllMemberByProject);
router.get('/getMemberExist', passport.authenticate('jwt', { session: false }),memberController.getMemberExist);

module.exports = router;