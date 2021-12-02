<template>
    <div class="bodyComponent">

        <!-- formulaire du bouton pour créer un projet -->
            <div id="createProject" v-if="projectCreated === false">
                <button class="btnComponent" type="submit" @click="createProject" >New Project</button>
            </div>
  
        <!-- appelle du component pour la creation d'un nouveau projet -->
        <div v-if="projectCreated == true">
            <div id="cancelCreateProject">
                <button class="btnComponent" @click="cancelCreateProject" type="submit">Cancel</button>
            </div>
            <ProjectComponents></ProjectComponents>
        </div>

        <hr>

        <!-- liste des projet du user connecter --> 
        <div id="projectsContainer">
            <h1>My Projects</h1>

            <!-- appelle de la fonction totalProject si false affiche un message que le user n'a pas de projet sinon on affiche la liste des projet -->
            <span ><!--v-if="totalProjectCount == 0"--> 
                <p>You don't have projects.</p>
            </span>

            <span> <!--  v-if="totalProjectCount != 0" -->
                <section>
                    <h2>Title - Description - Status</h2>
                </section>
                <section>
                    <span class="listProject" v-for="project in projects" :key="project.id">
                        <router-link class="btnLien" to="/">{{ project.title }} - {{ project.description }} - {{ project.name }}</router-link>
                    </span>
                </section>
            </span>
        </div>
    </div>
    
</template>

<!-- Importing external CSS file-->
<style>
    @import '../styles/project.css';
</style>

<script>
import ProjectService from '../services/projectService';
import ProjectComponents from '../components/CreateProjectComponent.vue';
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
