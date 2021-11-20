<template>
    <div>
        <form @submit="logout">
            <input id="btnLogout" type="submit" value="Logout">
        </form>
    </div>
</template>

<style>
    @import '../styles/logout.css';
</style>

<script>
import router from '../router/index'

export default {
    name : 'LogoutComponent',
    data() {
        return {

        }
    },
    methods : {
        logout() {
            event.preventDefault();
            router.push('/login');
            sessionStorage.clear();
            alert('You are logged out !');
        }
    }
}
</script>
