<template>
    <div>
        <h2>My meetings</h2>

        <!-- bouton pour créer un nouveau meeting -->
        <div class="divBtn" v-if="meetingCreated === false">
            <button id="btnNew" @click="createMeeting">New Meeting</button>
        </div>


        <!-- appelle du component pour la creation d'un nouveau meeting -->
        <div v-if="meetingCreated === true">
            <button id="btnCancel" @click="cancelCreateMeeting">Cancel</button>
            <CreateMeeting v-bind:projectId="this.projectId"></CreateMeeting>
        </div>
        <span  v-for="meeting in lstMeeting" :key="meeting.id">
            <router-link class="btnLien" :to="{name: 'meetingDetail', params: {meetingId: meeting.id}}">{{ meeting.name }} - {{ meeting.date }}</router-link>
        </span>
    </div>
</template>

<script>
import MeetingService from '../services/meetingService';
import CreateMeeting from '../components/CreateMeetingComponent.vue'

export default {
    name: 'ManageMeeting',
    props: {
        projectId : undefined
    },
    components:{
        CreateMeeting,
    },
    methods:{
        createMeeting() {
            this.meetingCreated = true
        },
        cancelCreateMeeting() {
            this.meetingCreated = false;
        },
    },
    data() {
        return {
            lstMeeting: [],
            meetingService : undefined,
            meetingCreated : false
        }
    },
    mounted() {
        this.meetingService = new MeetingService()
        this.lstMeeting = this.meetingService.getMeetingProject(this.projectId).then((meetings) => {
            this.lstMeeting = meetings
        })
    }
}
</script>