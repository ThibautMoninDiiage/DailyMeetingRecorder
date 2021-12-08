<template>
    <div>
        <div>All reports for meeting {{ this.meetingId }}</div>
        <form @submit="newReport">
            <input placeholder="Description" type="text" name="newReport" id="newReport">
            <input id="btnNew" type="submit" value="New report">
        </form>
        <div v-for="report in reports" :key="report.id">
            <div>{{ report.description }}</div>
        </div>
    </div>
</template>

<script>
    import ReportService from '../services/reportService'

    export default {
        name : 'ReportComponent',
        data() {
            return {
                meetingId : undefined,
                reports : undefined,
                reportService : undefined
            }
        },
        mounted() {
            this.reportService = new ReportService()
            this.meetingId = this.$route.params.meetingId
            this.reportService.getReports(this.meetingId).then(reports => {
                this.reports = reports
            })
        },
        methods : {
            newReport() {
                event.preventDefault()
                const description = document.getElementById('newReport').value
                this.reportService.createReport(description, this.meetingId)
                this.reportService.getReports(this.meetingId).then(reports => {
                    this.reports = reports
                })
            }
        }
    }
</script>

<style>

</style>
