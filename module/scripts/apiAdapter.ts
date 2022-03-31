// ---------- Imports -------------------------------------------------------
import { Character } from './Character';
import { 
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

// ---------- Executables -------------------------------------------------------

// ---------- Exports -------------------------------------------------------
export {ApiAdapter, ApiUserLogin, ApiUserResponse, ApiRequestBody, ApiRequestHeader, ApiRequest, ApiResponse};