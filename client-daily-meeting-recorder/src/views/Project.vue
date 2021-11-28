<template>
    <div  class="bodyComponent">
        <!-- formulaire du bouton pour créer un projet -->
        <form @submit="createNewProject" v-if="projectCreated === false">
            <div id="createNewProject">
                <input class="btnComponent" type="submit" value="New Project">
            </div>
        </form>

        <!-- appelle du component pour la creation d'un nouveau projet -->
        <div v-if="projectCreated == true">
            <form @submit="cancelcreateNewProject">
                <div id="cancelCreateNewProject">
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
            <span v-if="totalProjectCount == 0">
                <p>vous n'avais pas de projet</p>
            </span>

            <span v-if="totalProjectCount != 0">
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
    },
    methods: {
        createNewProject(){
            this.projectCreated = true
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
