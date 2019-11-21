import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

//set initial state of user to null - in the action of setting current user
// return currentuser to "USER from auth"
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER :
            
            return {
                ...state,
                currentUser: action.payload
            }
        default :
        return state;
    }
}

export default userReducer;

