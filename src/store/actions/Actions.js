import {
    SHOW_CHAT
} from '../constants'


export default class Actions {

    static showChat(data) {
        // console.log('ds',data)
        return {
            type: SHOW_CHAT,
            payload: data
        }
    }
}