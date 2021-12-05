<template>
    <div id="mainContainer">
        <form @submit="meetingModification">
            <div class="FormAddProject">
                <label for="meetingTitle">Name</label>
                <input type="text" v-bind:disabled="modifAccess" placeholder="Meeting Name" name="projectTitle" v-model="meetingName">
                <label for="meetingStratDate">Start Date</label>
                <input type="datetime-local" v-bind:disabled="modifAccess" class="inputDate" name="meetingStartingDate" v-model="startDate">   
                <label for="meetingStratDate">End Date</label>
                <input type="datetime-local" v-bind:disabled="modifAccess" name="meetingEndingDate" class="inputDate" v-model="endDate">   
                <div>
                    <input v-if="modifAccess === false" id="btnValidate" type="submit" value="Validate">
                </div>
            </div>
        </form>
        <input @click="cancelModifMeeting" v-if="modifAccess === false" id="btnCancel" type="submit" value="Cancel">
        
        <div id="createNewProject" v-if="modifAccess === true">
            <button id="btnModify" @click="modifMeeting" type="submit">Modify the meeting</button>
            <button id="btnDelete" @click="deleteMeeting" type="submit">Delete the meeting</button>
            <button id="btnNew" @click="createNewRecording" type="submit">Create a new recording</button>
        </div>
        <div v-if="showRecordingComponent === true">
            <RecordingComponent></RecordingComponent>
        </div>
    </div>
</template>

<!-- Importing external CSS file-->
<style>
    @import '../styles/meeting.css';
</style>

<script>
import ProjectService from '../services/projectService';
import RecordingComponent from '../components/RecordingComponent.vue'

export default({
    name:'ProjectSelected',
    components: {
        RecordingComponent
    },
    data(){
        return{
            modifAccess: true,
            meetingName: '',
            startDate: '',
            endDate: '',
            newMember: false,
            membres: undefined,
            status: undefined,
            showRecordingComponent : false
        }
    },
    mounted(){
        this.projectService = new ProjectService();
        // a faire
        this.projectService.getAllStatus().then(status => {
            this.status = status
        })
    },
    methods: {
        modifMeeting(){
            this.modifAccess = false
        },
        cancelModifMeeting(){
            this.modifAccess = true
        },
        deleteMeeting(){

        },
        meetingModification(){

        },
        createNewRecording() {
            if (this.showRecordingComponent === true) {
                this.showRecordingComponent = false
            } else {
                this.showRecordingComponent = true
            }
        }

    }
})
</script>
