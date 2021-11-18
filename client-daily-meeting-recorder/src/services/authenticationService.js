import axios from 'axios';
import router from '../router/index';

export default class AuthenticationService {

    // Method that permit to the user to create a new account on the website
    async register(username, email, password) {
        // We call the register function in the server authentication controller
        try {
            await axios.post('http://localhost:3000/authentication/register', {
            username : username,
            email : email,
            password : password
        })
        } catch (error) {
            console.log('Register error : ' + error);
        }

    }

    // Method that permit to the user to login on the website
    async login(username, email, password) {
        try {
            // We call the login function in the server authentication controller
            const loginApiCall = await axios.post('http://localhost:3000/authentication/login', {
            username : username,
            email : email,
            password : password
        })
        if (loginApiCall) {
            // Locally store the user token (username, email)
            localStorage.setItem('jwt', loginApiCall.data);
            localStorage.getItem('jwt');
            router.push('/project');
        }
        } catch (error) {
            console.log('Login error : ' + error);
        }
    }

}
