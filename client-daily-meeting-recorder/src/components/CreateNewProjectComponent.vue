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
// import ProjectService from '../services/projectService';

export default {
    name: 'ProjectCreate',
    data() {
        return {
            idUser: 20,
            titleProject: '',
            descriptionProject: '',
            validFields: ''
        }
    },
    mounted(){
        this.ProjectService = ProjectService();
    },
    methods: {
        checkForm(){
           if(this.titleProject == '' || this.descriptionProject == ''){
               this.validFields == false
           }else{
               this.validFields == true
           }
            
        },
        addNewProject(){
            this.checkForm();
            if(this.validFields == true){
                this.ProjectService.createNewProject(this.idUser, this.titleProject, this.descriptionProject);
                alert('projet ajouter dans la bdd');
            }
            else{
                alert('un champs non remplis');
            }
        }
    }    
    
}
</script>
