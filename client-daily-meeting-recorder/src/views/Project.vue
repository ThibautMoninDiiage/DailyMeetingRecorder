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
            <table>
                <thead><h1>My Projects</h1></thead>
                <div v-for="project in projects" :key="project.id">
                    <td>{{ project.title }}</td>
                    <td>|</td>
                    <td>{{ project.description }}</td>
                </div>
            </table>
        </div>
        
        <hr> <!-- séparation pour début de la liste des projet -->

        <!-- liste des projet du user connecter --> 
        <div>
            <!-- appelle de la fonction totalProject si false affiche un message que le user n'a pas de projet sinon on affiche la liste des projet -->

            <span v-if="totalProjectCount == 0">
                <p>vous n'avais pas de projet</p>
            </span>
           
        </div>
    </div>
    
</template>

<style>
    @import '../styles/project.css';
</style>

<script>
import ProjectService from '../services/projectService';
import ProjectComponents from '../components/CreateNewProjectComponent.vue';

export default {
    name:'Project',
    components: {
        ProjectComponents
    },
    data(){
        return{
            projectCreated: false,
            totalProjectCount: undefined,
            projects : undefined,
            projectService : undefined
        }
    },
    mounted(){
        this.projectService = new ProjectService();
        this.projectService.getAllUserProjects().then(projects => {
            this.projects = projects
        })
        // this.getAllUserProjects();
    },
    methods: {
        createNewProject(){
            this.projectCreated = true
            // this.ProjectService.createNewProject()
        },
        cancelcreateNewProject(){
            this.projectCreated = false;
        },
        totalProject(){
            this.totalProjectCount == 0;
        }
    }
}
</script>
