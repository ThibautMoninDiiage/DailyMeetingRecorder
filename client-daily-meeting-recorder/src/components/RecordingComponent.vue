<template>
    <div>
        <form @submit="startAudioRecording">
            <input id="btnStartAudioRecord" type="submit" value="Start audio record">
        </form>
        <form @submit="stopAudioRecording">
            <input id="btnStopAudioRecord" type="submit" value="Stop audio record">
        </form>
        <hr>
            <h1>My recordings</h1>
        <div id="audiosContainer"></div>
    </div>
</template>

<script>
    export default {
        name : 'RecordingComponent',
        data() {
            return {
                mediaRecorder : null,
                chunks : [],
                recording : undefined
            }
        },
        methods : {
            // Function that will start an audio recording
            startAudioRecording() {
                event.preventDefault()
                console.log('Audio record started')
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
                console.log('Audio record stopped')
                this.mediaRecorder.stop()
            },
            createMediaElement(mediaType, fileType) {
                const blob = new Blob(this.chunks, {
                    type : fileType
                })
                const mediaURL = window.URL.createObjectURL(blob)
                const audioElement = document.createElement(mediaType)
                audioElement.setAttribute('controls', '')
                audioElement.src = mediaURL
                const audiosContainer = document.getElementById('audiosContainer')
                const audioDiv = document.createElement('div')
                const audioName = prompt('Audio recording name : ', 'Recording date : ' + Date())
                const audioTitle = document.createElement('div')
                audioTitle.innerText = audioName
                audioDiv.appendChild(audioTitle)
                audioDiv.appendChild(audioElement)
                audiosContainer.appendChild(audioDiv)
                // Reset the media recorder and the chunks
                this.mediaRecorder = null
                this.chunks = []
            }
        }
    }
</script>

<style>
    @import '../styles/recording.css';
</style>
