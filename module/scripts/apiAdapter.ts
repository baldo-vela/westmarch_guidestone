// ---------- Imports -------------------------------------------------------
// Note: see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
import type { Character } from './Character';
import type { 
    UserRoster, 
    UserSorties,
    UserRoles
} from './User';

// ---------- Types -------------------------------------------------------
interface ApiAdapter {
    baseUrl: string;
}

type ApiUserLogin = {
    email: string;
    password: string;
}
type ApiUserResponse = {
    id: number;
    displayName: string;
    discordId: string;
    email: string;
    deactivated: boolean;
    suspendedUntil: string;
    roster: UserRoster;
    sorties: UserSorties;
    roles: UserRoles;
    AuthToken: string;
}
type ApiRequestBody ={
    [ApiQuery: string]: object
}
type ApiRequestHeader = {

}
interface ApiRequest {
    body: ApiRequestBody;
}

interface ApiResponse {

}

// ---------- Classes -------------------------------------------------------

class ApiAdapter {
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    /**
     * Returns the API fetch 
     * @param url desitination url string
     * @param data JSON object to be sent as body
     * @returns 
     */
    post(url, data) {
        return fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    }
}
class UserApiAdapter extends ApiAdapter {
    constructor(baseUrl: string) {
        super(baseUrl);
    }
    login(data: ApiUserLogin) {
        return this.post('/user/login', data);
    }
}
// ---------- Executables -------------------------------------------------------

// ---------- Exports -------------------------------------------------------
export {ApiAdapter, ApiUserLogin, ApiUserResponse, ApiRequestBody, ApiRequestHeader, ApiRequest, ApiResponse, UserApiAdapter};