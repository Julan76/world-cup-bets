import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {UserService} from '../user.service';
import {UserApp} from '../classes/userApp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private angularAuth: AngularFireAuth, private userService: UserService) { }

  login() {
    this.angularAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      console.log('user info is ', res);
      console.log('noo ', this.userService);
      this.userService.changeUserApp(new UserApp(res.user.displayName, res.user.photoURL));
      console.log(this.userService);
    }).catch(res => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
