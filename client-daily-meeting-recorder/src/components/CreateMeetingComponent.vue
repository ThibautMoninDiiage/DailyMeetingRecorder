<template>
    <div>
        <form @submit="createMeeting">
            <input v-model="name" type="text" name="meetingName" id="meetingName" placeholder="Meeting Name" required>
            <input v-model="startDate" type="datetime-local" v-bind:min="minDate" name="meetingStartingDate" id="meetingStartingDate" required>
            <span class="validity"></span>
            <input v-model="endDate" type="datetime-local" v-bind:min="minDate" name="meetingEndingDate" id="meetingEndingDate" required>
            <span class="validity"></span>
            <br>
            <input id="btnNew" type="submit" value="New Meeting">
        </form>
    </div>
</template>

<style>
    @import '../styles/meeting.css';
</style>

<script>
    import MeetingService from '../services/meetingService';

    export default {
        name : 'MeetingComponent', 
        props:{
            projectId: undefined
        },
        data() {
            return {
                name:'',
                startDate:'',
                endDate:'',
                minDate: '',
                validDate : undefined,
                validNotEmpty : undefined,
            }
        },
        mounted() {
            this.getMinDate();
            this.meetingService = new MeetingService();
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
                console.log(this.projectId)
                this.meetingService.createMeeting(this.name, this.startDate, this.endDate, this.projectId)

                // if (this.validDate && this.validNotEmpty) {
                    
                // } else {
                //     alert('Attention la durée de la réunion est négative ou un champs n\'est pas remplis');
                // }
            },
        }
    }
</script>
