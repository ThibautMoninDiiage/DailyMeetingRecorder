<template>
    <div class="bodyComponent">
        <form @submit="login">
        <div>
            <div id="login-text">Login</div>
            <input v-model="username" type="text" name="username" id="username" placeholder="Username" required>
            <input v-model="email" type="email" name="user-email" id="user-email" placeholder="E-Mail" required>
            <input v-model="password" type="password" name="user-password" id="user-password" placeholder="Password">
            <br/>
            <input type="submit" value="Login" class="btnLien" style="width: 15vh;">
        </div>
        </form>

        <section id="btnNoAccount">
            <router-link class="btnLien" to="/register">Register</router-link> 
        </section>
        
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

                console.log(this.$store.state)
            }
        }
    }
</script>
