import {Injectable} from "@angular/core";
import {IEmployee} from "./employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";


@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = `http://localhost:59106/api/`;

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.baseUrl + `employees`)
      .pipe(
        catchError(this.handleError('getEmployees', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error, any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("error: ", error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      //return of(result as T);

      return Observable.throw(error);
    };
  }


}
