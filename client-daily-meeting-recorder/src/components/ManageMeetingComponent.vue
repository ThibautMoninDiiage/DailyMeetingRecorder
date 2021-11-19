<template>
    <div>
        <p>Liste des meetings</p>
        <ul v-for="meeting in lstMeeting" v-bind:key="meeting.id">
            <li>{{meeting.name}}</li>
            <li>{{meeting.startDate}}</li>
            <li>{{meeting.endDate}}</li>
        </ul>
    </div>
</template>

<script>
import MeetingService from '../services/meetingService';
export default {
    name: 'ManageMeeting',
    props: {
        idProject : undefined
    },
    data() {
        return {
            lstMeeting: [],
            meetingService : undefined
        }
    },
    mounted() {
        this.meetingService = new MeetingService()
        this.lstMeeting = this.meetingService.getMeetingProject(this.idProject).then((meetings) => {
            this.lstMeeting = meetings
        })
    }
}
</script>

<style scoped>
    ul>li {
        display: inline-block;
        margin-right: 5px;
    }
</style>
