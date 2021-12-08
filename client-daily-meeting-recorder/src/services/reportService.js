import axios from 'axios';

export default class ReportService {

    async createReport(description, meetingId) {
        await axios.post('http://localhost:3000/report/createReport', {
            description : description,
            meetingId : meetingId
        });
    }

    async getReports(meetingId) {
        const reports = await axios.get('http://localhost:3000/report/getReports/' + meetingId);
        return reports.data;
    }

}
