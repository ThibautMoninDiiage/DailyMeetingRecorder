<template>
    <div>
        <form @submit="startAudioRecording">
            <input id="btnStartAudioRecord" type="submit" value="Start">
        </form>
        <form @submit="stopAudioRecording">
            <input id="btnStopAudioRecord" type="submit" value="Stop">
        </form>
        <hr>
            <h1>My recordings</h1>
            <div id="audiosContainer">
                <audio id="audio" controls v-bind:src="mediaUrl"></audio>
            </div>
    </div>
</template>

<script>
    import RecordingService from '../services/recordingService'

    export default {
        name : 'RecordingComponent',
        data() {
            return {
                mediaRecorder : null,
                chunks : [],
                recordingService : undefined,
                mediaUrl : undefined,
                meetingId : undefined
            }
        },
        mounted() {
            this.meetingId = this.$route.params.meetingId;
            this.meetingName = this.$route.params.meetingName;
            this.recordingService = new RecordingService()
            // this.recordingService.getMeetingRecording(this.meetingId).then(response => {
            //     console.log(this.mediaUrl);
            // })
            this.mediaUrl = 'http://localhost:3000/recording/getMeetingRecording/' + this.meetingId
        },
        methods : {
            // Function that will start an audio recording
            startAudioRecording() {
                event.preventDefault()
                // Asking the user to authorize the browser to record the audio
                navigator.mediaDevices.getUserMedia({
                    audio : true
                }).then(stream => {
                    this.mediaRecorder = new MediaRecorder(stream)
                    this.mediaRecorder.ondataavailable = (e) => {
                        this.chunks.push(e.data)
                    }
                    this.mediaRecorder.onstop = () => {
                        this.saveRecording('audio/mp3')
                    }
                    this.mediaRecorder.start()
                })
            },
            saveRecording(fileFormat) {
                const blob = new Blob(this.chunks, {
                    type : fileFormat
                })
                const mediaUrl = window.URL.createObjectURL(blob)
                this.mediaRecorder = null
                this.chunks = []
                const audioName = this.$route.params.meetingName
                // Save the audio file to the server
                const formData = new FormData()
                formData.append('audio', blob, audioName + '.mp3')
                fetch('http://localhost:3000/recording/saveRecordingToServer', {
                    method : 'POST',
                    body : formData
                })
                .then(response => {
                    response.json
                })
                .then(() => {
                    console.log('Audio saved');
                    // Save the local path into the database
                    this.recordingService.saveRecording(audioName, this.meetingName + '.mp3', this.meetingId)
                })
                .catch(error => {
                    console.log(error);
                })
                alert('New recording saved')
                this.mediaUrl = 'http://localhost:3000/recording/getMeetingRecording/' + this.meetingId
            },
            // Function that will save the current audio recording
            stopAudioRecording() {
                event.preventDefault()
                this.mediaRecorder.stop()
            }
        }
    }
</script>

<style>
    @import '../styles/recording.css';
</style>
