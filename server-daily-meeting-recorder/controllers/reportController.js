const reportService = require('../services/reportService');

class ReportController {

    constructor() {

    }

    async createReport(request, response) {
        const report = await reportService.createReport(request.body.description, request.body.meetingId);
        response.status(200).send(report);
    }

    async getReports(request, response) {
        const reports = await reportService.getReports();
        response.status(200).send(reports);
    }
}

module.exports = new ReportController();
