import { Injectable } from '@angular/core';
import { Action } from '../models/action.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  users: Array<User>;

  constructor() {
    this.users = JSON.parse(localStorage.getItem("users"));
    if (this.users == null) {
      this.users = new Array<User>();
      localStorage.setItem("users", JSON.stringify(this.users));
    }
  }

  addAction(actionToAdd) {
    let action = new Action(actionToAdd.value, actionToAdd.message);
    this.users = JSON.parse(localStorage.getItem("users"));
    let user = this.users.find(user => user.username == actionToAdd.username);
    if (user) {
      user.actions.push(action);
    }
    else {
      user = new User(actionToAdd.username, new Array<Action>());
      user.actions.push(action);
      this.users.push(user);
    }
    localStorage.setItem("users", JSON.stringify(this.users));

  }

  getUsersWithActions(): Array<User> {
    this.users = new Array<User>();
    let temp = JSON.parse(localStorage.getItem('users'));
    temp.forEach(user => {
      let u = new User(user.username, new Array<Action>());
      user.actions.forEach(action => {
        u.actions.push(new Action(action.value, action.message));
      });
      this.users.push(u);
    });
    return this.users;
  }

  clearLocalStorage() {
    try {
      localStorage.setItem("users", '[]');
    }
    catch (err) {
      console.log(err)
    }
  }
}
