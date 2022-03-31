import { Character } from './Character';

type UserRoster = {
    id: number;
    name: string;
    img: string;
    data: Character;

}
type UserSorties = {
    id: number;
    title: string;
    description: string;
    owner: number;
    signups: {
        id: number;

    }
}
type UserRoles = {
    id: string;
    name: string;
    permissions : string[];

}

export { UserRoster, UserSorties, UserRoles };