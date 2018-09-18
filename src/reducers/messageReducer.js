import { ADD_MESSAGE, POP_MESSAGE } from '../actions/messageAction';

const initialState = {
    messages: []
}

const Message = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push(action.payload);
            return {
                ...state,
                messages: state.messages
            }
        case POP_MESSAGE: 
            state.messages.pop();
            return {
                ...state,
                messages: state.messages
            }
        default:
            return state;
    }
}

export default Message;