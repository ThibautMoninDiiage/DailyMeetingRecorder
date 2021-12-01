<template>
    <div>
        <h1>My Meetings</h1>

        <!-- bouton pour créer un nouveau meeting -->
        <div v-if="meetingCreated === false">
            <button class="btnComponent" @click="createMeeting">New Project</button>
        </div>

        <!-- appelle du component pour la creation d'un nouveau meeting -->
        <div v-if="meetingCreated === true">
            <button class="btnComponent" @click="cancelCreateMeeting">Cancel</button>
            <CreateMeeting v-bind:projectId="2"></CreateMeeting>
        </div>


        <table>
            <thead>
                <th>Name</th>
                <th>Start Date</th>
                <th>Start End</th>
            </thead>
            <tbody>
                <tr v-for="meeting in lstMeeting" v-bind:key="meeting.id">
                    <td>{{meeting.name}}</td>
                    <td>{{meeting.startDate}}</td>
                    <td>{{meeting.endDate}}</td>
                </tr>
            </tbody>
        </table>
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
        // this.lstMeeting = this.meetingService.getMeetingProject(this.projectId).then((meetings) => {
        //     this.lstMeeting = meetings
        // })
    }
}
</script>

<style scoped>
    ul>li {
        display: inline-block;
        margin-right: 5px;
    }
    table {
        margin-left: auto;
        margin-right: auto;
    }
</style>
