import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {UserService} from '../user.service';
import {UserApp} from '../classes/userApp';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private angularAuth: AngularFireAuth, private userService: UserService,
              private router: Router, public snackBar: MatSnackBar) { }

  errorMessage(e) {
    this.snackBar.open('Erreur pendant la connexion', 'une erreur est survenue! ' + e , {
      duration: 5000,
    });
  }
  login() {
    this.angularAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      this.userService.changeUserApp(new UserApp(res.user.displayName, res.user.photoURL));
      this.router.navigate(['fixture']);
    }).catch(res => {
      this.errorMessage(res);
    });
  }

  ngOnInit() {
  }

}
