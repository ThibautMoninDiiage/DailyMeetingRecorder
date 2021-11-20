<template>
    <div>
        <!-- formulaire du bouton pour créer un projet -->
        <form @submit="createNewProject" v-if="projectCreated === false">
            <div id="createNewProject">
                <input type="submit" value="New Project">
            </div>
        </form>

        <!-- appelle du component pour la creation d'un nouveau projet -->
        <div v-if="projectCreated == true">
            <form @submit="cancelcreateNewProject">
                <div id="cancelCreateNewProject">
                    <input type="submit" value="Cancel">
                </div>
            </form>
            <ProjectComponents></ProjectComponents>
        </div>

        <hr>

        <div id="projectsContainer">
            <h1>My Projects</h1>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    <tr v-for="project in projects" :key="project.id">
                        <td>{{ project.title }}</td>
                        <td>{{ project.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr>
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

export default {
    name : 'Project',
    components : {
        ProjectComponents
    },
    data() {
        return {
            projectCreated : false,
            totalProjectCount : undefined,
            projects : undefined,
            projectService : undefined,
            userId : undefined
        }
    },
    mounted() {
        // Defining the user id from the token stored in the session
        this.userId = jwtdecode(sessionStorage.getItem('jwt')).sub;
        this.projectService = new ProjectService();
        this.projectService.getAllUserProjects(this.userId).then(projects => {
            this.projects = projects
            console.log(projects);
            console.log(this.projects);
        })
    },
    methods: {
        createNewProject() {
            this.projectCreated = true
        },
        cancelcreateNewProject() {
            this.projectCreated = false;
        },
        totalProject() {
            this.totalProjectCount == 0;
        }
    }
}
</script>
