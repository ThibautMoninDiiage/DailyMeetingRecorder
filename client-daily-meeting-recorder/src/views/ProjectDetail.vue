<template>
    <div id="mainContainer">
        <form @submit="projectModification">
            <div class="FormAddProject">
                <div>
                    <div>Title</div>
                    <input class="inputSize" type="text" v-bind:disabled="modifAccess" placeholder="Project Title"  name="projectTitle" v-model="projectTitle">
                </div>

                <div>
                    <div>Description</div>
                    <textarea class="inputSize" v-bind:disabled="modifAccess" placeholder="Project Description" name="projectDescription" v-model="projectDescription"></textarea>   
                </div>

                <div>
                    <div>Status</div>
                    <select class="inputSize" v-bind:disabled="modifAccess" v-model="selectStatus" name="StatusProject">
                        <option v-for="stat in status" :key="stat.id" v-bind:value="stat.id">{{stat.name}}</option>
                    </select>
                </div>

                <div>
                    <input v-if="modifAccess === false" id="btnValidate" type="submit" value="Validate">
                </div>
            </div>
        </form>
        <input v-if="modifAccess === false" @click="cancelModifProject" id="btnCancel" type="submit" value="Cancel">
        
        <div id="createNewProject" v-if="modifAccess === true">
            <button id="btnModify" @click="modifProject">Modify the project</button>
            <button id="btnDelete" @click="deleteProject">Delete the project</button>
        </div>

        <hr/>

        <ManageMember></ManageMember>
        <ManageMeeting v-bind:projectId="this.projectId"></ManageMeeting>

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
        this.$nextTick().then( () => {
            this.SetStatus()
        });
    },
    methods: {
        modifProject(){
            this.modifAccess = false
        },
        cancelModifProject(){
            this.modifAccess = true
        },
        projectModification(){

            if(this.projectTitle != '' || this.projectDescription != ''){
                event.preventDefault();
                this.projectService.updateProject(this.projectId, this.projectTitle, this.projectDescription, this.selectStatus);
                
                //event.run();
            }else{
                event.preventDefault();
                alert('You need to fill every fields !')
            }
        },
        deleteProject(){
            if(confirm('you are sur !')){
                this.projectService.deleteProject(this.projectId)
                //this.$route.push('/project')
            }
        },
        SetStatus(){
            document.querySelector("option[value='"+this.projectStatus+"']").selected = true;
        }
        
    }
})
</script>
