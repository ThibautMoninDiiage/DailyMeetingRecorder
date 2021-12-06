<template>
    <div>
        <form @submit="createMeeting">
            <input v-model="name" type="text" name="meetingName" id="meetingName" placeholder="Meeting Name" required>
            <input v-model="date" type="date" v-bind:min="minDate" name="meetingStartingDate" id="meetingStartingDate" required>
            <span class="validity"></span>
            <br>
            <input class="btnLien" type="submit" value="New Meeting">
        </form>
    </div>
</template>

<style>

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
                date:'',
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
             * Verifie si les champs sont remplis dans le formulaire
             * @returns {boolean} true => si ok / false => si ko
             */
            verifIfEmpty() {
                if (this.date && this.name) this.validNotEmpty = true
                else this.validNotEmpty = false 
            },
            /**
             * Création du meeting à partir des informations saisies par le client
             */
            createMeeting(){
                event.preventDefault()
                this.verifIfEmpty()
                console.log(this.projectId)
                this.meetingService.createMeeting(this.name, this.date, this.projectId)
            },
        }
    }
</script>
