import { ADD_MESSAGE, POP_MESSAGE, State } from './types';

const initialState = State;

const Message = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
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