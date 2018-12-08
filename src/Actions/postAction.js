import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import postApi from '../Api/postApi';

import {normalizeResponseErrors} from './utils';

export const createPost = post => dispatch => {
    return postApi.createPost(post).then()
}