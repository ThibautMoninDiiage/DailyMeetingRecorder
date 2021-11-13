const UserModel = require('../models/userModel');

class AuthenticationService {

    async register(username, email, password) {
        // We create a new user in the database
        const user = await UserModel.create({
            username : username,
            email : email,
            password : password
        })
        return user
    }

    async login(email, password) {

    }

}

// Exporting the server authentication service
module.exports = new AuthenticationService();
