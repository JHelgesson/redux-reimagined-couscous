// Action types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const POP_MESSAGE = 'POP_MESSAGE';

// Actions
export const addMessageSuccess = (message) => ({
    type: ADD_MESSAGE,
    payload: {
        message: message,
        time: Date.now()
    }
});

export const popMessageSuccess = () => ({
    type: POP_MESSAGE,
    payload: { }
});

// Action creators, se redux-thunk
export const addMessageAction = (message) => {
    return dispatch => {
        dispatch(addMessageSuccess(message));
    }
}

export const popMessageAction = () => {
    return dispatch => {
        dispatch(popMessageSuccess());
    }
}