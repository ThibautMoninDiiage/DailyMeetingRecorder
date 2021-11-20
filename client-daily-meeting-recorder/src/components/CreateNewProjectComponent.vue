<template>
    <!-- formulaire de création d'un nouveau projet -->
    <form @submit="createProject">
        <div>
            <input type="text" placeholder="Project Title" name="projectTitle" id="projectTitle" v-model="projectTitle">
            <textarea placeholder="Project Description" name="projectDescription" id="projectDescription" v-model="projectDescription"></textarea>         
            <input type="submit" value="Validate">
        </div>
    </form>
</template>

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
            event.preventDefault();
            this.checkForm();
            if(this.validFields == true){
                this.projectService.createProject(this.userId, this.projectTitle, this.projectDescription).then((project) => { 
                    this.projectId = project.id
                    this.projectService.addProjectToTeam(this.userId, this.projectId);
                });
            }
            else{
                alert('You need to fill every fields !');
            }
        }
    }    
    
}
</script>
