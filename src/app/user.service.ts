import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { UserApp } from './classes/userApp';

@Injectable()
export class UserService {
  private user = new UserApp(null, null);
  private userApp = new BehaviorSubject<UserApp>(this.user);
  constructor() { }

  changeUserApp(us: UserApp) {
    this.userApp.next(us);
  }
}
