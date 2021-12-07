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
                
                <div class="divBtn" v-if="modifAccess === false">
                    <input  id="btnValidate" type="submit" value="Validate">
                </div>
            </div>
        </form>
        <div class="divBtn" v-if="modifAccess === false">
            <input v-if="modifAccess === false" @click="cancelModifProject" id="btnCancel" type="submit" value="Cancel">
        </div>
        
        
        <div class="divBtn" v-if="modifAccess === true">
            <button id="btnModify" @click="modifProject">Modify the project</button>
        </div>
        <div class="divBtn" v-if="modifAccess === true">
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
import router from '../router';

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
            if(confirm('you are sur ?')){
                this.modifAccess = true
                location.reload()
            }
        },
        projectModification(){
            if(this.projectTitle != '' && this.projectDescription != ''){
                this.projectService.updateProject(this.projectId, this.projectTitle, this.projectDescription, this.selectStatus);
            }else{
                event.preventDefault();
                alert('You need to fill every fields !')
            }
        },
        deleteProject(){
            if(confirm('you are sur !')){
                this.projectService.deleteProject(this.projectId)
                router.push({path: '/project'})
                location.reload()
            }
        },
        SetStatus(){
            document.querySelector("option[value='"+this.projectStatus+"']").selected = true;
        }
        
    }
})
</script>
