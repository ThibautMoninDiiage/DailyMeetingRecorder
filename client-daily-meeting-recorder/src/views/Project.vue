<template>
    <div  class="bodyComponent">

        <!-- formulaire du bouton pour créer un projet -->
        <form @submit="createProject" v-if="projectCreated === false">
            <div id="createProject">
                <input class="btnComponent" type="submit" value="New Project">
            </div>
        </form>


        <!-- appelle du component pour la creation d'un nouveau projet -->
        <div v-if="projectCreated == true">
            <form @submit="cancelCreateProject">
                <div id="cancelCreateProject">
                    <input class="btnComponent" type="submit" value="Cancel">
                </div>
            </form>
            <ProjectComponents></ProjectComponents>
        </div>

        <hr>

        <!-- liste des projet du user connecter --> 
        <div id="projectsContainer">
            <h1>My Projects</h1>

            <!-- appelle de la fonction totalProject si false affiche un message que le user n'a pas de projet sinon on affiche la liste des projet -->
            <span><!-- v-if="totalProjectCount == 0" -->
                <p>vous n'avais pas de projet</p>
            </span>

            <span> <!--  v-if="totalProjectCount != 0" -->
                <section>
                    <h2>Title - Description - Status</h2>
                </section>
                <section>
                    <span class="listProject" v-for="project in projects" :key="project.id">
                        <router-link class="btnLien" to="/">{{ project.title }} - {{ project.description }} - {{ project.Status }}</router-link>
                    </span>
                </section>
            </span>
    </div>
    
</template>

<!-- Importing external CSS file-->
<style>
    @import '../styles/project.css';
</style>

<script>
import ProjectService from '../services/projectService';
import ProjectComponents from '../components/CreateNewProjectComponent.vue';
import jwtdecode from 'jwt-decode'
import router from '../router';

export default {
    name : 'Project',
    components : {
        ProjectComponents
    },
    data() {
        return {
            projectCreated : false,
            projects : undefined,
            projectService : undefined,
            userId : undefined
        }
    },
    mounted() {
        // Defining the user id from the token stored in the session
        this.userId = jwtdecode(sessionStorage.getItem('jwt')).sub;
        this.projectService = new ProjectService();
        // Getting all user's project with the current user id
        this.projectService.getAllUserProjects(this.userId).then(projects => {
            this.projects = projects
        })
    },
    methods : {
        createProject() {
            this.projectCreated = true
        },
        cancelCreateProject() {
            this.projectCreated = false;
        },
        getProjectMeetings(project) {
            this.projectService.getProjectMeetings(project.id)
            router.push({name : 'Meeting', params : { projectId : project.id}});
        }
    }
}
</script>
