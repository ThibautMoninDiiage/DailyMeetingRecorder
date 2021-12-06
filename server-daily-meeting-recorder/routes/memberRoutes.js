var express = require('express');
var router = express.Router();
var passport = require('passport');

const memberController = require('../controllers/memberController');

router.get('/getAllMemberByProject', memberController.getAllMemberByProject);
router.get('/getMemberExist', passport.authenticate('jwt', { session: false }),memberController.getMemberExist);
router.get('/getMemberInTeam', passport.authenticate('jwt', { session: false }),memberController.getMemberInTeam);
router.get('/addMemberToTeam', passport.authenticate('jwt', { session: false }),memberController.addMemberToTeam);
router.get('/deleteMemberOnProject', passport.authenticate('jwt', { session: false }),memberController.deleteMemberOnProject);

module.exports = router;