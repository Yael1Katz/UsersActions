import { Action } from "./action.model";

export class User {
    username: string;
    actions: Array<Action>;
    constructor(username, actions: Array<Action>) {
        this.username = username;
        this.actions = actions;
    };
}