import {
    SHOW_CHAT
} from './../constants'

const initialState = {}

export default function Main(state = initialState, action) {
    switch (action.type) {
        case SHOW_CHAT:
            state = {
                ...state,
                currentUserChat: action.payload
            }
            break;
        default:
            break;
    }
    return state;
}