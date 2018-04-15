import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {CompetitionService} from '../competition-service/competition.service';
import {Competition} from '../classes/competition';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  competitionList = [];
  selectedCompet: Competition;
  constructor( private userService: UserService, private router: Router, private competitionService: CompetitionService) {

  }
  ngOnInit() {
    if (this.userService.getUserApp().name == null) {
      this.router.navigate(['login']);
    } else {
      this.loadCompet();
    }
  }

  loadCompet(): void {
    this.competitionService.getAllCompetitions()
      .subscribe((competition: Competition[] ) => {
      this.competitionList = competition;
      console.log(competition);
      },
      e => console.log("error while getting competitions ", e));
  }

  onSelect(compet: Competition): void {
    this.selectedCompet = compet;
  }
}
