<template>
    <div class="bodyComponent">
        <form @submit="meetingModification">
            <div class="FormAddProject">
                <label for="meetingTitle" class="labelMeeting">Name</label>
                <input type="text" v-bind:disabled="modifAccess" placeholder="Meeting Name" name="projectTitle" class="projectTitle" v-model="meetingName">
                <label for="meetingStratDate" class="labelMeeting">Date</label>
                <input type="date" v-bind:disabled="modifAccess" class="inputDate" name="meetingStartingDate" v-model="date">   
                <div>
                    <input v-if="modifAccess === false" class="btnValide" type="submit" value="Validate">
                </div>
            </div>
        </form>
        <input @click="cancelModifMeeting" v-if="modifAccess === false" class="btnValide" type="submit" value="Cancel">
        
        <div id="createNewProject" v-if="modifAccess === true">
            <button class="btnValide" @click="modifMeeting" type="submit">Modify the meeting</button>
            <button class="btnValide" @click="deleteMeeting" type="submit">Delete the meeting</button>
        </div>
    </div>
</template>

<style>
    @import '../styles/meeting.css';
</style>

<script>
import MeetingService from '../services/meetingService';
import router from '../router';

export default({
    name:'ProjectSelected',
    components: {
        
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
        }

    }
})
</script>
