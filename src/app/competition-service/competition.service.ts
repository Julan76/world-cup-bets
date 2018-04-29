import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Competition} from '../classes/competition';
import {Fixture, FixtureMap} from '../classes/fixture';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class CompetitionService {

  private allCompetitionsUrl = "https://api.football-data.org/v1/competitions/";

  constructor(private http: HttpClient) {
  }

  private myCompetitions;
  private fixtureListForCompet;

  getAllCompetitions(): Observable<Competition[]> {
    if (typeof this.myCompetitions === 'undefined') {
      this.myCompetitions = this.http.get(this.allCompetitionsUrl)
        .pipe(
          catchError(this.handleError('Competitions not working', []))
        );
      return this.myCompetitions;
    } else {
      return this.myCompetitions;
    }
  }

  getFixturesForCompetition(id): Observable<Object> {
    // return this.fixtureListArray.filter(compet => compet.id === id);
    this.fixtureListForCompet = this.http.get(this.allCompetitionsUrl + "/" + id + "/fixtures?timeFrame=n10")
      .pipe(
        catchError(this.handleError('Fixtures for compet not working', []))
      );
    return this.fixtureListForCompet;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
