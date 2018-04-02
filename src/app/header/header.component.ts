import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {UserApp} from '../classes/userApp';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     user: UserApp;
  constructor(private userService: UserService) {
    userService.publicUser.subscribe((newUser: UserApp) => {
      this.user = newUser;
    });
  }

  ngOnInit() {
    this.user = this.userService.getUserApp();
    console.log("all ", this.user);
  }

}
