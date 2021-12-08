import axios from 'axios';

export default class ReportService {

    async createRemark(comment, meetingId) {
        await axios.post('http://localhost:3000/remark/createRemark', {
            comment : comment,
            meetingId : meetingId
        },
        {
            headers : {
                Authorization :  'Bearer ' + sessionStorage.getItem('jwt')
            }
        });
        
    }

    async getRemarks(meetingId) {
        const remarks = await axios.get('http://localhost:3000/remark/getRemarks/' + meetingId ,
        {
            headers : {
                Authorization :  'Bearer ' + sessionStorage.getItem('jwt')
            }
        });
        return remarks.data;
    }

}
