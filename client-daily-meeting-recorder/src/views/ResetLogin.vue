<template>
    <div class="bodyComponent">
        <form @submit="login">
        <div id="login-box">
            <div id="login-text">Mot de passe oublier</div>
            <input v-model="email" type="email" name="user-email" id="user-email" placeholder="E-Mail">
            <input v-model="email" type="email" name="user-confirme-email" id="user-confirme-email" placeholder="Confirmation E-Mail">
            <br/>
            <input type="submit" value="Valider" class="btnLien" style="width: 15vh;">
            <input type="submit" value="Annuler" class="btnLien" style="width: 15vh;">
        </div>
        </form>
    </div>
</template>

<style>
    @import '../styles/login.css';
</style>

