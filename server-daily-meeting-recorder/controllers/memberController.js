const memberService = require('../services/memberService');

class MemberController {
    constructor(){

    }

    async getAllMemberByProject(request, response) {
        const projectId = request.headers.authorization;
        const member = await memberService.getAllMemberByProject(projectId);
        response.status(200).send(member)
    }

    async getMemberExist(request, response) {
        console.log(request)
        const emailMember = request.query.email;
        const token = request.headers.authorization;
        const member = await memberService.getMemberExist(emailMember, token);
        response.status(200).send(member)
    }
     
}

module.exports = new MemberController();