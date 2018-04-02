import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { UserApp } from './classes/userApp';

@Injectable()
export class UserService {
  private userApp = new BehaviorSubject<UserApp>(new UserApp(null, null));
  publicUser = this.userApp.asObservable();
  constructor() {
    this.publicUser = this.userApp.asObservable();

  }

  changeUserApp(us: UserApp) {
    this.userApp.next(us);
  }
  getUserApp() {
   return this.userApp.value;
  }
}
