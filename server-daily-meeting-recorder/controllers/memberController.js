const memberService = require('../services/memberService');

class MemberController {
    constructor(){

    }

    async getAllMemberByProject(request, response) {
        const projectId = request.headers.authorization;
        const projects = await memberService.getAllMemberByProject(projectId);
        response.status(200).send(projects)
    }
     
}

module.exports = new MemberController();