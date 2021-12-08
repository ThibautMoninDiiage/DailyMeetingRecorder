const remarkService = require('../services/remarkService');
const jwtdecode = require('jwt-decode');

class RemarkController {

    constructor() {

    }

    async createRemark(request, response) {
        const userId = jwtdecode(request.headers.authorization.substring(7)).sub
        console.log(userId);
        const report = await remarkService.createRemark(request.body.comment, request.body.meetingId, userId);
        response.status(200).send(report);
    }

    async getRemarks(request, response) {
        const reports = await remarkService.getRemarks(request.params.meetingId);
        response.status(200).send(reports);
    }
}

module.exports = new RemarkController();
