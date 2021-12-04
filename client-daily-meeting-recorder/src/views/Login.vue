<template>
    <div id="loginContainer">
        <form @submit="login">
            <h1 class="mainTitle">Login</h1>
            <input v-model="username" type="text" name="username" id="username" placeholder="Username" required>
            <input v-model="email" type="email" name="user-email" id="user-email" placeholder="E-Mail" required>
            <input v-model="password" type="password" name="user-password" id="user-password" placeholder="Password">
            <br>
            <input id="btnLogin" type="submit" value="Login">
        </form>
        <a id="btnNoAccount" v-bind:href="'/register'">Don't have an account ? Register</a>
    </div>
</template>

<style>
    @import '../styles/login.css';
</style>

<script>
    import AuthenticationService from '../services/authenticationService';

    export default {
        name : 'Login',
        data() {
            return {
                username : '',
                email : '',
                password : ''
            }
        },
        mounted() {
            // We instanciate the authentication service class
            this.authenticationService = new AuthenticationService();
        },
        methods : {
            login() {
                event.preventDefault();
                // We call the login method from the client authentication service
                this.authenticationService.login(this.username, this.email, this.password);
            }
        }
    }
</script>
