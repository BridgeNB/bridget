import { getAuthenticatedUserFromLocalStorage }  from '../local-storage';
import { API_BASE_URL } from '../config';

const { jwtToken }  = getAuthenticatedUserFromLocalStorage();

class postApi {

    static requestHeader() {
        return {'AUTHORIZATION': `Bearer ${jwtToken}`}
    }

    static createPost(post) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeader());
        const request = new Request(`${API_BASE_URL}/api/post`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(post)
        });;
    }
}
