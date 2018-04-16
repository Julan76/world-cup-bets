import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-service/user.service';
import {Router} from '@angular/router';
import {CompetitionService} from '../competition-service/competition.service';
import {Competition} from '../classes/competition';
import {Fixture} from '../classes/fixture';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  competitionList = [];
  fixtureList = [];
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
      .subscribe((competitions: Competition[] ) => {
      this.competitionList = competitions;
      },
      e => console.log("error while getting competitions ", e));
  }
  loadFixturesForCompet(id): void {
  this.competitionService.getFixturesForCompetition(id)
    .subscribe((fixtures: Fixture[] ) => {
        this.fixtureList = fixtures;
        this.competitionService.addFixtureMapToArray(id, fixtures);
       // console.log(fixtures);
      },
      e => console.log("error while getting competitions ", e));
  }
  onSelect(compet: Competition): void {
    this.selectedCompet = compet;
    this.loadFixturesForCompet(this.selectedCompet.id);
  }
}
