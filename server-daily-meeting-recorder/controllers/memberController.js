const memberService = require('../services/memberService');

class MemberController {
    constructor(){

    }

    async getAllMemberByProject(request, response) {
        const projectId = request.headers.authorization;
        const projects = await memberService.getAllMemberByProject(projectId);
        response.status(200).send(projects)
    }

    async getMemberExist(request, response) {
        const emailMember = request.query.email;
        const token = request.headers.authorization;
        const member = await memberService.getMemberExist(emailMember, token);
        if(member != null){
            response.status(200).send(member)
        }else{
            response.status(404).send()
        }
    }

    async getMemberInTeam(request, response) {
        const idProject = request.query.idProject;
        const idUser = request.query.idUser;
        const token = request.headers.authorization;
        const member = await memberService.getMemberInTeam(idProject, idUser, token);
        if(member != null){
            response.status(200).send(member)
        }else{
            response.status(404).send()
        }
    }

    async addMemberToTeam(request, response) {
        const idProject = request.query.idProject;
        const idUser = request.query.idUser;
        const token = request.headers.authorization;
        const member = await memberService.addMemberToTeam(idProject, idUser, token);
        if(member != null){
            response.status(200).send(member)
        }else{
            response.status(404).send()
        }
    }

    async deleteMemberOnProject(request, response) {
        const idUser = request.query.idUser;
        const token = request.headers.authorization;
        const member = await memberService.deleteMemberOnProject(idUser, token);
        response.status(200).send(member)
        
    }
     
}

module.exports = new MemberController();