<template>

  <div id="app" >
    <div id="nav" v-if="path404 == false">
      <div id="appTitle">Daily Meeting Recorder</div>
        <section>
            <LogoutComponent v-if="pathLogout == true"></LogoutComponent>
            <ReturnComponent v-if="pathReturn == true"></ReturnComponent>
        </section>
    </div>
    <router-view/>
  </div>

</template>

<script>
    import LogoutComponent from './components/LogoutComponent.vue';
    import ReturnComponent from './components/returnComponent.vue';
    import router from './router';
    
    export default {
        name : 'App',
        components : {
            LogoutComponent,
            ReturnComponent
        },
        data() {
            return {
                isLoggedIn: true,
                pathLogout: false,
                pathReturn: false,
                path404: false
            }
        },
        watch :{
          '$route' : function(){
            this.checkPathLogout()
            this.checkPathReturn()
            this.checkPathNotFound()
          }
        },
        mounted(){
          this.checkPathLogout()
          this.checkPathReturn(),
          this.checkPathNotFound()
        },
        methods: {
          checkPathLogout(){  
            let pathLogin = router.currentRoute
              if (pathLogin.name == 'Login' || pathLogin.name == 'Home' || pathLogin.name == 'Register'){
                this.pathLogout = false
              }else{
                this.pathLogout = true
              }
          },
          checkPathReturn(){
              let pathLogin = router.currentRoute
              if (pathLogin.name == 'Login' || pathLogin.name == 'Home' || pathLogin.name == 'Project' || pathLogin.name == 'Register'){
                this.pathReturn = false
              }else{
                this.pathReturn = true
              }
          },
          checkPathNotFound(){
            let pathLogin = router.currentRoute
            if (pathLogin.name == '404'){
                this.path404 = true
              }else{
                this.path404 = false

              }
          }
        }
    }
</script>

<style>
    @import 'styles/global.css';
</style>
