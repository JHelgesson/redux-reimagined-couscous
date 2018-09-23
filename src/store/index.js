import { combineReducers } from 'redux';

import Message from './message/reducer';
import Route from './route/reducer';

export default combineReducers({
    Message,
    Route
});