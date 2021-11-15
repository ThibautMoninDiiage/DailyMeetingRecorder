import axios from 'axios';
import jwtDecode from 'jwt-decode'

export default class AuthenticationService {

    // Method that permit to the user to create a new account on the website
    register(username, email, password) {
        // We call the register function in the server authentication controller
        axios.post('http://localhost:3000/authentication/register', {
            username : username,
            email : email,
            password : password
        }).catch((error) => {
            console.log('Register error : ' + error);
        })
    }

    // Method that permit to the user to login on the website
    login(username, email, password) {
        // We call the login function in the server authentication controller
        axios.post('http://localhost:3000/authentication/login', {
            username : username,
            email : email,
            password : password
        }).then((response) => {
            localStorage.setItem('jwt', response.data);
            const generatedToken = jwtDecode(response.data);
            console.log(generatedToken);
        }).catch((error) => {
            console.log('Login error : ' + error);
        })
    }

}
