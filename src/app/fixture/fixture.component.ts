import {Component, OnInit} from '@angular/core';
import {UserService} from '../user-service/user.service';
import {Router} from '@angular/router';
import {CompetitionService} from '../competition-service/competition.service';
import {Competition} from '../classes/competition';
import {Fixture, FixtureMap} from '../classes/fixture';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  competitionList = [];
  private arrayFixtureMap: FixtureMap[] = new Array();
  private fixtureList: Fixture[];
  selectedCompet: Competition;

  constructor(private userService: UserService, private router: Router, private competitionService: CompetitionService) {
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
      .subscribe((competitions: Competition[]) => {
          this.competitionList = competitions;
        },
        e => console.log("error while getting competitions ", e));
  }

  loadFixturesForCompet(id): void {
    if (!this.arrayFixtureMap.find(fixtures => fixtures.idCompet === id)) {
      this.competitionService.getFixturesForCompetition(id)
        .subscribe((response) => {
        console.log(response);
         response.fixtures.forEach(fixture => this.mapLogoToFixture(fixture._links.awayTeam,fixture));
           this.fixtureList = response.fixtures;
            this.arrayFixtureMap.push(new FixtureMap(id, this.fixtureList));
          },
          e => console.log("error while getting competitions ", e));
    } else {
      this.fixtureList = this.arrayFixtureMap.find(fixtures => fixtures.idCompet === id).fixtures;
    }
  }

  onSelect(compet: Competition): void {
    this.selectedCompet = compet;
    this.loadFixturesForCompet(this.selectedCompet.id);
  }
  mapLogoToFixture(href, fixture) {
    this.competitionService.getTeamInfo(href.href)
      .subscribe((response) => {
        this.competitionService.getTeamLogo(response).subscribe((res) => {
          console.log("la rep " ,res);
        })
      })

  }
}
