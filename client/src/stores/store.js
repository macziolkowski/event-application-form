import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/usersReducer';

const store = createStore(
    combineReducers({
        users: usersReducer
    }),
    applyMiddleware(
        thunk
    )
)

export default store;
