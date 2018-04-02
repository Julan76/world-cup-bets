import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {UserApp} from '../classes/userApp';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userService.getUserApp().name == null) {
      this.router.navigate(['login']);
    }
  }

}
