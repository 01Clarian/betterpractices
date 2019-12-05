import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
}

//set initial state of user to null - in the action of setting current user
// return currentuser to "USER from auth"
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
         case UserActionTypes.SIGN_IN_FAILURE :
         case UserActionTypes.SIGN_OUT_FAILURE :
         case UserActionTypes.SIGN_UP_FAILURE :
            return {
                ...state,
                error: action.payload,
            }               
            case UserActionTypes.SIGN_OUT_SUCCESS :
                return {
                    ...state,
                currentUser: null,
                error: null,
                }    
        default :
        return state;
    }
}

export default userReducer;

