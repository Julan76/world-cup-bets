import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';


@Injectable()
export class CompetitionService {

  private allCompetitionsUrl = "https://api.football-data.org/v1/competitions/";
  constructor(private http: HttpClient) { }
  private myCompetitions;

  getAllCompetitions(): Observable<Object> {
    console.log(this.myCompetitions);
    if (!this.myCompetitions) {
      this.myCompetitions = this.http.get(this.allCompetitionsUrl)
        .pipe(
          catchError(this.handleError('Competitions not working', []))
        );
      return this.myCompetitions;
    } else {
      return this.myCompetitions;
    }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
