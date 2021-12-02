<template>
    <div>
        <button class="btnValide" @click="returnGoBack">Return</button>
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
        returnGoBack(){
            router.go(-1)
        }
    }
}
</script>