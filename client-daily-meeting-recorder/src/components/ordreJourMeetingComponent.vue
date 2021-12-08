<template>
    <div>
        <section>
            <h2>ordre du meeting</h2>
            <span class="listMembre" v-for="meeting in meeting" :key="meeting.id">
                <p>{{ meeting.Description }}</p>
            </span>
        </section>


    </div> 
</template>

<script>
import MeetingService from '../services/meetingService';

export default({
    name : 'ordreDuJourMeeting',
    data() {
        return {
            projectCreated : false,
            projects : undefined,
            projectService : undefined,
            userId : undefined,
            meetingId : this.$route.params.meetingId,
            ordre: undefined,
            meeting: undefined
        }
    },
    mounted() {
        this.meetingService = new MeetingService()
        this.meetingService.getOrdre(this.meetingId).then((meeting) => {
            this.meeting = meeting
        })
    },
})
</script>
