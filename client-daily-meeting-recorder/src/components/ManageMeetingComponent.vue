<template>
    <div>
        <h1>My Projects</h1>
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
