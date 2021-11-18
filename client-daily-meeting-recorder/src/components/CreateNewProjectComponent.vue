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

export default {
    name: 'ProjectCreate',
    data() {
        return {
            idUser: 1,
            titleProject: '',
            descriptionProject: '',
            validFields: undefined,
            projectService: undefined
        }
    },
    mounted(){
        this.projectService = new ProjectService();
    },
    methods: {
        checkForm(){
           if(this.titleProject == '' || this.descriptionProject == ''){
               this.validFields = false
           }else{
               this.validFields = true
           }
            
        },
        addNewProject(){
            event.preventDefault();
            this.checkForm();
            console.log(this.validFields)
            if(this.validFields == true){
                this.projectService.createNewProject(this.idUser, this.titleProject, this.descriptionProject);
                console.log('ok')
            }
            else{
                alert('un champs non remplis');
            }
        }
    }    
    
}
</script>
