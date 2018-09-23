import { LOCATION_CHANGE, State } from './types';

function getTitle(pathname) {
    if (pathname.toLowerCase().includes("dashboard")) {
        return "Dashboard";
    }

    if (pathname.toLowerCase().includes("secret")) {
        return "Testarea";
    }

    return "Missing title";
}

const Route = (state = State, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            let title = getTitle(action.payload.location.pathname).toUpperCase(); 
            return {
                ...state,
                title: title
            }
        default:
            return state;
    }
}

export default Route;