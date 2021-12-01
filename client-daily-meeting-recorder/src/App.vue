<template>

  <div id="app">
    <div id="nav">
      <h1 id="appTitle">Welcome to the daily meeting recorder app.</h1>
      <section>
        <LogoutComponent></LogoutComponent>
      </section>
    </div>
    <router-view/>
  </div>

</template>

<!-- <script>
// // import { defineComponent } from '@vue/composition-api'

// export default({
//    name:{
    
//   },
//   methods: {
//     homePage() {
//       console.log(this.$route.path)
//       if (this.$route.query.path == "/") {
//         return true;
//     } else {
//         return false;
//       }
//     }
//   }
// })
// </script> -->

<style>
    @import './styles/global.css';
</style>

<script>
    import LogoutComponent from './components/LogoutComponent.vue'
    
    export default {
        name : 'App',
        components : {
            LogoutComponent
        },
        data() {
            return {
                isLoggedIn : true
            }
        }
    }
</script>
