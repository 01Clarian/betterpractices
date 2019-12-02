import {createSelector} from 'reselect'

const selectUser = state => state.user 


 const selectCurrentUser = createSelector(
    [selectUser],
    (user)=> user.currentUser 
);

export const selectNewUser = createSelector(
    [selectUser],
    (user)=> user.newUser
);

export default selectCurrentUser

