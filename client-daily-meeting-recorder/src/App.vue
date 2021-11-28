<template>

  <div id="app">
    <div id="nav">
      <p>Bienvenu sur l'application Meeting Record</p>
      <section>
        <router-link class="btnLien" to="/">Déconnexion</router-link> <!--  v-if="homePage()"-->
        <router-link class="btnLien" to="/">Retour liste projet</router-link> 
        <router-link class="btnLien" to="/">retour au projet</router-link> 
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 80%;
  background-color: #3DC9C9;
  border-radius: 60px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: auto;
  margin-left: auto;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #09c6f9 ;
}

.bodyComponent{
    margin: 1%;
    background-color:#3DC9C9;
    border-radius: 50px;
}

.btnLien{
  background-color: #2C9066;
  padding: 1%;
  border-radius: 10px;
  cursor: pointer;
  width: auto;
  text-decoration: none;
  color: black !important;
  font-weight: normal !important;
}

.btnLien:hover{
    background-color: #DDDDDD;
    border-radius: 5px;
}

.btnComponent{
    background-color: #2C9066;
    padding: 1%;
    border-radius: 10px;
    cursor: pointer;
    width: auto;
    text-decoration: none;
    color: black !important;
    font-weight: normal !important;
    margin-top: 20px;
    width: 50vw;
}

textarea{
  resize: none;
}

</style>
