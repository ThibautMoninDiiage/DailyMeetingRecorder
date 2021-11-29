var express = require('express');
var router = express.Router();

const memberController = require('../controllers/memberController');

router.get('/getAllMemberByProject', memberController.getAllMemberByProject);

module.exports = router;