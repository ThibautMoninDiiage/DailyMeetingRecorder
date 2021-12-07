<template>
    <div id="mainContainer">
        <form @submit="meetingModification">
            <div class="FormAddProject">
                <label for="meetingTitle">Name</label>
                <input type="text" v-bind:disabled="modifAccess" placeholder="Meeting Name" name="projectTitle" v-model="meetingName">
                <label for="meetingDate">Date</label>
                <input type="date" v-bind:disabled="modifAccess" class="inputDate" name="meetingStartingDate" v-model="date">   
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
import RecordingComponent from '../components/RecordingComponent.vue'
import router from '../router';
import MeetingService from '../services/meetingService';

export default({
    name:'ProjectSelected',
    components: {
        RecordingComponent
    },
    data(){
        return{
            modifAccess: true,
            meetingName: '',
            date: '',
            meetingId : this.$route.params.meetingId,
            newMember: false,
            membres: undefined,
            status: undefined,
            showRecordingComponent : false,
            meetingService :undefined
        }
    },
    mounted(){
        this.meetingService = new MeetingService()
        this.meetingService.getMeeting(this.meetingId).then((meeting) => {
            this.meetingName = meeting.name
            this.date = meeting.date
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
            if(confirm('Are you sure to delete this meeting ?')) {
                this.meetingService.deleteMeeting(this.meetingId)
                router.go(-1)
            }
        },
        meetingModification(){
            event.preventDefault()
            this.meetingService.updateMeeting(this.meetingName, this.date, this.meetingId)
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
