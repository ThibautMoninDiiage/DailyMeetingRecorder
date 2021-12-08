const ReportModel = require('../models/reportModel')

class ReportService {

    async createReport(description, meetingId) {
        const report = await ReportModel.create({
            description : description,
            idMeeting : meetingId
        })
        return report
    }

    async getReports(){
        return await ReportModel.findAll()
    }

}

module.exports = new ReportService();
