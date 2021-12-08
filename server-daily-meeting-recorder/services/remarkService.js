const RemarkModel = require('../models/remarkModel')

class RemarkService {

    async createRemark(comment, meetingId, userId) {
        const remark = await RemarkModel.create({
            comment : comment,
            idMeeting : meetingId,
            idUser : userId
        })
        return remark
    }

    async getRemarks(idMeeting){
        return await RemarkModel.findAll({
            where : {
                idMeeting : idMeeting
            }
        })
    }

}

module.exports = new RemarkService();
