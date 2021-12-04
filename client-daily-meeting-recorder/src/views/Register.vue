<template>
     <div id="registerContainer">
        <form @submit="register">
            <div>
                <div class="mainTitle">Register</div>
                <input v-model="username" type="text" name="username" id="username" placeholder="Username" required>
                <input v-model="email" type="email" name="user-email" id="user-email" placeholder="E-Mail" required>
                <input v-model="emailConfirmation" type="email" name="user-email-confirm" id="user-email-confirm" placeholder="E-Mail confirmation" required>
                <input v-model="password" type="password" name="user-password" id="user-password" placeholder="Password" required>
                <input v-model="passwordConfirmation" type="password" name="user-password-confirmation" id="user-password-confirmation" placeholder="Password confirmation" required>
                <br>
                <input id="btnRegister" type="submit" value="Register">
            </div>
        </form>
        <a id="btnAlreadyHaveAccount" v-bind:href="'/login'">Already have an account ? Login</a>
    </div>
</template>

<style>
    @import '../styles/register.css';
</style>

<script>
    import AuthenticationService from '../services/authenticationService';
    import Router from '../router/index';

    export default {
        name : 'Register',
        data() {
            return {
                authenticationService : undefined,
                username : '',
                email : '',
                emailConfirmation : '',
                password : '',
                passwordConfirmation : '',
                validEmail : undefined,
                validPassword : undefined,
                validFields : undefined
            }
        },
        mounted() {
            // We instanciate the authentication service class
            this.authenticationService = new AuthenticationService();
        },
        methods : {
            register() {
                // Don't refresh the page on activating submit button
                event.preventDefault();
                this.verifyEmptyFields();
                this.emailVerification(this.email, this.emailConfirmation);
                this.passwordVerification(this.password, this.passwordConfirmation);

                if (this.validEmail && this.validPassword && this.validFields) {
                    // We call the register function from the client authentication service
                    this.authenticationService.register(this.username, this.email, this.password);
                    Router.push('/login');
                } else {
                    alert('Wrong email or password confirmation or invalid fields !');
                }
            },
            emailVerification() {
                if (this.email != this.emailConfirmation) {
                    this.validEmail = false;
                } else {
                    this.validEmail = true;
                }
            },
            passwordVerification() {
                if (this.password != this.passwordConfirmation) {
                    this.validPassword = false;
                } else {
                    this.validPassword = true;
                }
            },
            verifyEmptyFields() {
                if (this.username == '' || this.email == '' || this.password == '') {
                    this.validFields = false;
                } else {
                    this.validFields = true;
                }
            }
        }
    }
</script>
