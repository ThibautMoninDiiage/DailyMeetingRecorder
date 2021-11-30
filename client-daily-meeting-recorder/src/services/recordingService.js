import axios from 'axios'

export default class RecordingService {

    async saveRecording(name, url, meetingId) {
        try {
            await axios.post('http://localhost:3000/recording/saveRecording', {
                name : name,
                url : url,
                meetingId : meetingId
            })
        } catch (error) {
            console.error('Recording save error : ' + error)
        }
    }

    async getMeetingRecording() {
        try {
            await axios.get('http://localhost:3000/recording/getMeetingRecording', {
                // headers : {
                //     Authorization : userId
                // }
            })
        } catch (error) {
            console.error('Get recording error : ' + error);
        }
    }

}
