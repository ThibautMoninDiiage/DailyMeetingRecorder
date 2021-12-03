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
                <audio controls src=""></audio>
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
                recording : undefined,
                mediaUrl : undefined
            }
        },
        mounted() {
            this.recordingService = new RecordingService()
            this.recordingService.getMeetingRecording().then(recording => {
                this.recording = recording
            })
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
                        this.createMediaElement('audio', 'audio/mp3')
                    }
                    this.mediaRecorder.start()
                })
            },
            // Function that will save the current audio recording
            stopAudioRecording() {
                event.preventDefault()
                this.mediaRecorder.stop()
            },
            createMediaElement(mediaType, fileType) {
                // Initialise a new date
                const date = new Date()
                // Format the current date
                const todayDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
                const blob = new Blob(this.chunks, {
                    type : fileType
                })
                const mediaURL = window.URL.createObjectURL(blob)
                const audioElement = document.createElement(mediaType)
                audioElement.setAttribute('controls', '')
                audioElement.src = mediaURL
                const audiosContainer = document.getElementById('audiosContainer')
                const audioDiv = document.createElement('div')
                const audioName = prompt('Audio recording name : ', 'Recording date : ' + todayDate)
                const audioTitle = document.createElement('div')
                audioTitle.innerText = audioName
                audioDiv.appendChild(audioTitle)
                audioDiv.appendChild(audioElement)
                audiosContainer.appendChild(audioDiv)
                // Reset the media recorder and the chunks
                this.mediaRecorder = null
                this.chunks = []
                this.recordingService.saveRecording(audioName, mediaURL, 3)
                this.saveRecordingToServer('audio', blob, audioName + '.mp3')
            },
            saveRecordingToServer(type, audioBlob, fileName) {
                const formData = new FormData();
                formData.append(type, audioBlob, fileName);
                fetch('http://localhost:3000/recording/saveRecordingToServer', {
                    method : 'POST',
                    body : formData,
                })
                .then((response) => response.json())
                .then(() => {
                    console.log('Audio saved on the server');
                })
                .catch((err) => {
                    console.error(err);
                });
            }
        }
    }
</script>

<style>
    @import '../styles/recording.css';
</style>
