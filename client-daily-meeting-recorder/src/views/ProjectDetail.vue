<template>
    <div class="bodyComponent">
        <form @submit="projectModification">
            <div class="FormAddProject">
                <label for="projectTitle" class="labelProject">Title</label>
                <input type="text" v-bind:disabled="modifAccess" placeholder="Project Title"  name="projectTitle" class="projectTitle" v-model="projectTitle">
                <label for="projectDescription" class="labelProject">Description</label>
                <textarea v-bind:disabled="modifAccess" placeholder="Project Description" name="projectDescription" class="projectDescription" v-model="projectDescription"></textarea>   
                <label for="" class="labelProject">Status</label> 
                <select v-bind:disabled="modifAccess" v-model="selectStatus" name="StatusProject" class="statusProject">
                    <option v-for="stat in status" :key="stat.id" v-bind:value="stat.id"> {{stat.name}}</option>
                </select>
                <div>
                    <input v-if="modifAccess === false" class="btnValide" type="submit" value="Validate">
                </div>
            </div>
        </form>
        <input v-if="modifAccess === false" @click="cancelModifProject" class="btnValide" type="submit" value="Cancel">
        
        <div id="createNewProject" v-if="modifAccess === true">
            <button class="btnValide" @click="modifProject">Modify the project</button>
            <button class="btnValide" @click="deleteProject">Delete the project</button>
        </div>

        <hr/>

        <ManageMember></ManageMember>
        <ManageMeeting v-bind:projectId="1"></ManageMeeting>

    </div>
</template>

<style>
    @import '../styles/project.css';
</style>

<script>
//import ProjectService from '../services/projectService';
import ManageMember from '../components/ManageMemberComponent.vue';
import ManageMeeting from '../components/ManageMeetingComponent.vue';
import ProjectService from '../services/projectService';

export default({
    name:'ProjectSelected',
    components: {
        ManageMember,
        ManageMeeting
    },
    data(){
        return{
            modifAccess: true,
            projectId: this.$route.params.projectId,
            projectTitle: '',
            projectDescription: '',
            projectStatus: '',
            newMember: false,
            membres: undefined,
            status: undefined,
            project: undefined,
            selectStatus: undefined
        }
    },
    mounted(){
        this.projectService = new ProjectService();
        this.projectService.getAllStatus().then(status => {
            this.status = status
        });
        
        this.projectService.getProjectById(this.projectId).then(project => {
            this.projectTitle = project.title
            this.projectDescription = project.description
            this.projectStatus = project.status
        });


    },
    updated() {
        // a revoir 
        this.$nextTick(() => {
            this.SetStatus()
        }) 
    },
    methods: {
        modifProject(){
            this.modifAccess = false
        },
        cancelModifProject(){
            if(confirm('are you sur !')){
                this.modifAccess = true
            }
        },
        projectModification(){
            console.log(this.projectTitle)
            console.log(this.projectDescription)
            console.log(this.selectStatus)

            if(this.projectTitle != '' || this.projectDescription != ''){
                event.preventDefault();
                this.projectService.updateProject(this.projectId, this.projectTitle, this.projectDescription, this.projectStatus);
                
                //event.run();
            }else{
                event.preventDefault();
                alert('You need to fill every fields !')
            }
        },
        deleteProject(){

        },
        SetStatus(){
            document.querySelector("option[value='"+this.projectStatus+"']").selected = true;
        }
        
    }
})
</script>
