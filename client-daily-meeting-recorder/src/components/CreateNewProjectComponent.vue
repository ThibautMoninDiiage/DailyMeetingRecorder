<template>
    <!-- formulaire de création d'un nouveau projet -->
    <form @submit="addNewProject">
        <div>
            <input type="text" placeholder="Project Title" name="titleProject" id="titleProject" v-model="titleProject" style="border: black 1px solid">
            <textarea placeholder="Project Desciption" name="descriptionProject" id="descriptionProject" v-model="descriptionProject"></textarea>         
            <input type="submit" value="Validate">
        </div>
    </form>
</template>

<script>
import ProjectService from '../services/projectService';
import jwtdecode from 'jwt-decode';

export default {
    name: 'ProjectCreate',
    data() {
        return {
            userId : undefined,
            idProject : undefined,
            titleProject : '',
            descriptionProject : '',
            validFields : undefined,
            projectService : undefined
        }
    },
    mounted() {
        this.projectService = new ProjectService();
        this.userId = jwtdecode(sessionStorage.getItem('jwt')).sub;
    },
    methods: {
        checkForm() {
           if(this.titleProject == '' || this.descriptionProject == ''){
               this.validFields = false
           }else{
               this.validFields = true
           }
            
        },
        addNewProject(){
            event.preventDefault();
            this.checkForm();
            if(this.validFields == true){
                this.projectService.createNewProject(this.userId, this.titleProject, this.descriptionProject).then((project) => { 
                    this.idProject = project.id
                    this.projectService.addProjectToTeam(this.userId, this.idProject);
                });
               
            }
            else{
                alert('You need to fill every fields !');
            }
        }
    }    
    
}
</script>
