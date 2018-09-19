import {Injectable} from "@angular/core";
import {IEmployee} from "./employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`http://localhost:59106/api/employees`);
  }


}
