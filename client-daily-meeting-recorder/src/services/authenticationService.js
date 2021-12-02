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
            console.error('Register error : ' + error);
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
            sessionStorage.setItem('jwt', loginApiCall.data);
            // Redirect to the project page
            router.push('/project');
        }
        } catch (error) {
            console.error('Login error : ' + error);
        }
    }

    static async checkToken(){
        return new Promise((resolve) => {
            axios.get('http://localhost:3000/authentication/checkToken', {
            headers : {
                Authorization : 'Bearer ' + sessionStorage.getItem('jwt')
            }
        }).then((response) => {
            if(response.status === 200) resolve(true)
            else resolve('error')
        }).catch((err) => {
            if(err.response.status === 401) resolve(false)
            else resolve('error')
        })
            })
    }

}
