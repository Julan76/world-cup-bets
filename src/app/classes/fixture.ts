export class Fixture {
  date: Date;
  status: String;
  matchday: number;
  homeTeamName: String;
  awayTeamName: string;
  result: Result;
  odds: String;


  constructor(matchday: number) {
    this.matchday = matchday;
  }
}

export class FixtureMap {
  idCompet: number;
  fixtures: Fixture[];

    constructor(idCompet: number, fixtures: Fixture[]) {
    this.idCompet = idCompet;
    this.fixtures = fixtures;
  }
}

export class Result {
  goalsHomeTeam: Number;
  goalsAwayTeam: Number;
}
