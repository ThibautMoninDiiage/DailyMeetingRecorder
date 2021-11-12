<template>
    <form>
        <div id="register-box">
            <div id="register-text">Register</div>
            <hr id="separator">
            <input type="text" name="username" id="username" placeholder="Username">
            <input type="email" name="user-email" id="user-email" placeholder="E-Mail">
            <input type="email" name="user-email-confirm" id="user-email-confirm" placeholder="E-Mail confirmation">
            <input type="password" name="user-password" id="user-password" placeholder="Password">
            <input type="submit" value="Register" id="btn-register">
        </div>
    </form>
</template>

<style>
  @import '../styles/register.css';
</style>
