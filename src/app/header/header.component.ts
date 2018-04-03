import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {UserApp} from '../classes/userApp';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     user: UserApp;
     location = '';
  constructor(private userService: UserService, private router: Router) {
    this.location = this.router.url;
    userService.publicUser.subscribe((newUser: UserApp) => {
      this.user = newUser;
    });
  }

  ngOnInit() {
    this.user = this.userService.getUserApp();
    console.log("all ", this.user);
  }

}
