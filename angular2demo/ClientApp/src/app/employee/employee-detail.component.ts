import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {IEmployee} from "./employee";
import {ActivatedRoute, Router} from "@angular/router";
import {UserPreferencesService} from "./user-preferences.service";

@Component({
  selector: "app-employee-detail",
  templateUrl: "employee-detail.component.html",
  styleUrls: ["employee-detail.component.css"]
})

export class EmployeeDetailComponent implements OnInit {
  employee: IEmployee;
  statusMessage = "Loading data. Please wait...";

  constructor(private router: Router,
              private userPreferencesService: UserPreferencesService,
              private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let employeeCode = this.activatedRoute.snapshot.params['code'];

    this.employeeService.getEmployee(employeeCode)
      .subscribe(employeeData => {
          if (employeeData == null) {
            this.statusMessage = "Employee with the specified Employee Code does not exist";
          } else {
            this.employee = employeeData;
            //console.log(this.employee);
          }
        },
        error => {
          this.statusMessage = "Problem with the service. Please try again after sometime"
          console.log(error)
        });


  }

  get colour(): string {
    return this.userPreferencesService.colourPreference
  }

  set colour(colour: string) {
    this.userPreferencesService.colourPreference = colour;
  }

  onBackButtonClick(): void{
    this.router.navigate(['/employees']);
  }
}
