import axios from 'axios';

export default class AuthenticationService {

    register(username, email, password) {
        // We call the register function in the server authentication controller
        axios.post('http://localhost:3000/authentication/register', {
            username : username,
            email : email,
            password : password
        })
    }

}
