var express = require('express');
var router = express.Router();

const reportController = require('../controllers/reportController');

router.post('/createReport', reportController.createReport);
router.get('/getReports/:meetingId', reportController.getReports)

module.exports = router;
