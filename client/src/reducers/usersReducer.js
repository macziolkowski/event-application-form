import constants from '../constants/actionTypes';

var initialState = {
    users: []
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {

        case constants.USERS_RECEIVED:
            updated['users'] = action.users
            return updated

        default:
            return state
    }
}
