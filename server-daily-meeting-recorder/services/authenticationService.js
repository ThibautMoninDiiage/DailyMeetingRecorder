const UserModel = require('../models/userModel');

class AuthenticationService {

    async register(username, email, password) {
        // We create a new user in the database
        const user = await UserModel.create({
            username : username,
            email : email,
            password : password
        })
        return user;
    }

    async login(username, email, password) {
        const user = await UserModel.findOne({
            where : {
                username : username,
                email : email,
                password : password
            }
        })
        
        // const userFound = await user.verifyUser(password);

        // if (userFound) {
        //     return user;
        // } else {
        //     return undefined;
        // }

    }
}

// Exporting the server authentication service
module.exports = new AuthenticationService();
