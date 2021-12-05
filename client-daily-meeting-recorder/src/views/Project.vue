<template>
    <div id="mainContainer">

        <h1 class="mainTitle">My projects</h1>

        <!-- formulaire du bouton pour créer un projet -->
        <div id="createProject" v-if="projectCreated == false">
            <button id="btnNew" class="btnComponent" @click="createProject" >New Project</button>
        </div>
  
        <!-- appelle du component pour la creation d'un nouveau projet -->
        <div v-if="projectCreated == true">
            <div id="cancelCreateProject">
                <button id="btnCancel" @click="cancelCreateProject">Cancel</button>
            </div>
            <ProjectComponents></ProjectComponents>
        </div>

        <hr>

        <div id="projectsContainer">
            <section>
                <h2>Title - Description - Status</h2>
            </section>
            <section>
                <span class="listProject" v-for="project in projects" :key="project.id">
                    <router-link id="projects" class="btnLien" :to="{name: 'projectDetail', params: {projectId: project.id} }">{{ project.title }} | {{ project.description }} | {{ project.name }}</router-link>
                </span>
            </section>
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
        }
    }
}
</script>
