<template>
    <div>
        <div>All remarks for meeting {{ this.meetingId }}</div>
        <form @submit="newRemark">
            <input placeholder="Comment" type="text" name="newReport" id="newReport" v-model="comment">
            <input id="btnNew" type="submit" value="New remark">
        </form>
        <div v-for="remark in remarks" :key="remark.id">
            <div>{{ remark.comment }}</div>
        </div>
    </div>
</template>

<script>
    import RemarkService from '../services/remarkService'

    export default {
        name : 'RemarkComponent',
        props:{
            meetingId : undefined
        },
        data() {
            return {
                remarks : undefined,
                remarkService : undefined,
                comment : ''
            }
        },
        mounted() {
            this.remarkService = new RemarkService()
            this.remarkService.getRemarks(this.meetingId).then(remarks => {
                this.remarks = remarks
            })
        },
        methods : {
            newRemark() {
                event.preventDefault()
                console.log(this.comment);
                this.remarkService.createRemark(this.comment, this.meetingId).then(() =>{
                    this.remarkService.getRemarks(this.meetingId).then(remarks => {
                    this.remarks = remarks
                })
                })
                
            }
        }
    }
</script>

<style>

</style>
