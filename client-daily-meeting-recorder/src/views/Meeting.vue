<template>
    <div>

        <!--On button click, call the meeting component to create a new meeting in the current project-->
        <form @submit="createMeeting" v-if="meetingCreated === false">
            <div id="createMeeting">
                <input id="btnCreateMeeting" type="submit" value="New Meeting">
            </div>
        </form>
        
        <div v-if="meetingCreated === true">
            <form @submit="cancelCreateMeeting">
                <div id="cancelCreateMeeting">
                    <input id="btnCancel" type="submit" value="Cancel">
                </div>
            </form>
            <MeetingComponent></MeetingComponent>
        </div>

        <hr>

        <div id="projectsContainer">
            <h1>Meetings for project name</h1>
            <table>
                <thead>
                    <th>Meeting Name</th>
                    <th>Starting Date</th>
                    <th>Ending Date</th>
                </thead>
                <tbody>
                    <tr v-for="meeting in meetings" :key="meeting.id">
                        <td>{{ meeting.name }}</td>
                        <td>{{ meeting.startDate }}</td>
                        <td>{{ meeting.endDate }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<style>
    @import '../styles/meeting.css';
</style>

<script>
    import ProjectService from '../services/projectService';
    import MeetingComponent from '../components/CreateNewMeetingComponent.vue';

    export default {
        name : 'Meeting',
        components : {
            MeetingComponent
        },
        data() {
            return {
                meetingService : undefined,
                projectService : undefined,
                meetings : undefined,
                projectId : undefined, 
                meetingCreated : false
            }
        },
        mounted() {
            this.projectService = new ProjectService();
            this.projectId = this.$route.params.projectId;
            this.projectService.getProjectMeetings(this.projectId).then(meetings => {
            this.meetings = meetings
        })
        },
        methods : {
            createMeeting() {
                this.meetingCreated = true
            },
            cancelCreateMeeting() {
                this.meetingCreated = false;
            }
        }
    }
</script>
