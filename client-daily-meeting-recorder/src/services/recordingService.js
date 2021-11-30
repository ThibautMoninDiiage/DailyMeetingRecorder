import axios from 'axios'

export default class RecordingService {

    async saveRecording(duration, url, meetingId) {
        try {
            await axios.post('http://localhost:3000/recording/saveRecording', {
                duration : duration,
                url : url,
                meetingId : meetingId
            })
        } catch (error) {
            console.error('Recording save error : ' + error)
        }
    }

}
