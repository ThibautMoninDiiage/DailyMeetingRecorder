<template>
    <!-- formulaire de création d'un nouveau projet -->
    <form @submit="createProject">
        <div id="createProjectContainer">
            <input type="text" placeholder="Project Title" name="projectTitle" class="inputSize" v-model="projectTitle">
            <textarea placeholder="Project Description" name="projectDescription" class="inputSize" v-model="projectDescription"></textarea>         
            <br>
            <input id="btnValidate" type="submit" value="Validate">
        </div>
    </form>
</template>

<style>
    @import '../styles/project.css';
</style>

<script>
import ProjectService from '../services/projectService';
import jwtdecode from 'jwt-decode';

export default {
    name : 'ProjectCreate',
    data() {
        return {
            userId : undefined,
            projectId : undefined,
            projectTitle : '',
            projectDescription : '',
            validFields : undefined,
            projectService : undefined
        }
    },
    mounted() {
        this.projectService = new ProjectService();
        this.userId = jwtdecode(sessionStorage.getItem('jwt')).sub;
    },
    methods : {
        checkForm() {
           if(this.projectTitle == '' || this.projectDescription == ''){
               this.validFields = false
           }else{
               this.validFields = true
           }
            
        },
        createProject(){
            this.checkForm();
            if(this.validFields == true){
                this.projectService.createProject(this.projectTitle, this.projectDescription).then((project) => { 
                    this.projectId = project.id
                    this.projectService.addProjectToTeam(this.projectId);
                });
                alert('Project create !');
                
            }
            else{
                event.preventDefault();
                alert('You need to fill every fields !');
            }
        }
    }    
    
}
</script>
