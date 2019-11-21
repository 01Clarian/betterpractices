import {UserActionTypes} from './user.types'
// user is the user
const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})


export default setCurrentUser