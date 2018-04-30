export class Fixture {
  awayTeamName: string;
  date: Date;
  homeTeamName: String;
  matchday: number;
  odds: string;
  result: Result;
  status: string;
  _links: Link;
  crestUrl: string;
}
export class FixtureList {
  fixtures: Fixture[];
}
export class Link {
  awayTeam: Href;
  competition: Href;
  homeTeam: Href;
  self: Href;
}
export class Href {
  href: String;
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
