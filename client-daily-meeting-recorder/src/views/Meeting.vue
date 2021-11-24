<template>
    <div>

        <form @submit="createMeeting" v-if="meetingCreated === false">
            <div id="createMeeting">
                <input id="btnCreateMeeting" type="submit" value="New Meeting">
            </div>
        </form>

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

        <form @submit="createMeeting">
            <select v-model="selectProject" name="projectSelection" id="projectSelection" required>
                <option v-bind:value="project.id" v-for="(project) in lstProject" v-bind:key="project.id">{{project.title}}</option>
            </select>
            <input v-model="name" type="text" name="meetingName" id="meetingName" placeholder="Meeting Name" required>
            <input v-model="startDate" type="datetime-local" v-bind:min="minDate" name="meetingStartingDate" id="meetingStartingDate" required>
            <span class="validity"></span>
            <input v-model="endDate" type="datetime-local" v-bind:min="minDate" name="meetingEndingDate" id="meetingEndingDate" required>
            <span class="validity"></span>
            <input type="submit" value="New Meeting">
        </form>
    </div>
</template>

<style>
    @import '../styles/meeting.css';
</style>

<script>
    import MeetingService from '../services/meetingService';
    import ProjectService from '../services/projectService';

    export default {
        name : 'Meeting',
        data() {
            return {
                selectProject: '',
                name:'',
                startDate:'',
                endDate:'',
                minDate: '',
                lstProject: undefined,
                validDate : undefined,
                validNotEmpty : undefined,
                meetingService : undefined,
                projectService : undefined,
                meetings : undefined,
                projectId : undefined, 
                meetingCreated : false
            }
        },
        mounted() {
            this.meetingService = new MeetingService();
            this.projectService = new ProjectService()
            this.getMinDate();
            this.projectId = this.$route.params.projectId;
            this.projectService.getProjectMeetings(this.projectId).then(meetings => {
            this.meetings = meetings
        })
        },
        methods : {
            /**
             * Définis la date actuel pour aider l'utilsateur dans la saisie du formulaire
             */
            getMinDate() {
                let date = new Date()
                this.minDate =  date.getFullYear() + "-"
                + (date.getMonth()+1)  + "-" 
                +  date.getDate() + "T"  
                + date.getHours() + ":"  
                + date.getMinutes()
            },
            /**
             * Verifie si les dates de la réunion sont cohérentes
             * @returns {boolean} true => si ok / false => si ko
             */
            verifDate() {
                if (this.endDate > this.startDate) this.validDate = true
                else this.validDate = false
            },
            /**
             * Verifie si les champs sont remplis dans le formulaire
             * @returns {boolean} true => si ok / false => si ko
             */
            verifIfEmpty() {
                if (this.startDate && this.endDate && this.name) this.validNotEmpty = true
                else this.validNotEmpty = false 
            },
            /**
             * Création du meeting à partir des informations saisies par le client
             */
            createMeeting(){
                event.preventDefault()
                this.verifDate()
                this.verifIfEmpty()

                if (this.validDate && this.validNotEmpty) {
                    console.log('ok')
                } else {
                    alert('Attention la durée de la réunion est négative ou un champs n\'est pas remplis');
                }
            }
        }
    }
</script>
