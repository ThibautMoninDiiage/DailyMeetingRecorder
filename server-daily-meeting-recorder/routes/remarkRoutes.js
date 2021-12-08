var express = require('express');
var router = express.Router();
var passport = require('passport');

const remarkController = require('../controllers/remarkController');

router.post('/createRemark', remarkController.createRemark);
router.get('/getRemarks/:meetingId',passport.authenticate('jwt', { session: false }), remarkController.getRemarks)

module.exports = router;
