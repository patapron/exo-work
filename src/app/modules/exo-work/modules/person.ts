import { Comment } from './comment';

export class Person {
    id: number;
    comments: Comment[];
    created: Date;
    modified: Date;
    uuid: string;
    email: string;
    short_name: string;
    full_name: string;
    date_joined: Date;
    status: string;
    gender: string;
    short_me: string;
    location: string;
    profile_picture: string;

    constructor() {
    }
}
