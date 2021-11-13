const AuthenticationService = require('../services/authenticationService');
const jwt = require('jsonwebtoken');

class AuthenticationController {

    constructor() {

    }

    async register(request, response) {
        // We call the register function in the server authentication service
        const user = await AuthenticationService.register(request.body.username, request.body.email, request.body.password);
        const payload = {
            sub : user.id,
            username : user.username,
            email : user.email
        }
        const token =  jwt.sign(payload, 'secret');
        response.status(200).send(token);
    }

}

// Exporting the AuthenticationController
module.exports = new AuthenticationController();
