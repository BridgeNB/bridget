import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthenticatedUserIntoLocalStorage, deleteAuthenticatedUserFromLocalStorage} from '../local-storage';

/******** Registration ***********/
export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                )
            }
        });
};


/******** Login ***********/

