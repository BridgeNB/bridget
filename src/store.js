import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import {getAuthenticatedUserFromLocalStorage} from './local-storage';
import authReducer from './Reducers/auth';
import {setAuthToken, refreshAuthToken} from './Actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer
    }),
    applyMiddleware(thunk)
);

const authToken = getAuthenticatedUserFromLocalStorage();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;