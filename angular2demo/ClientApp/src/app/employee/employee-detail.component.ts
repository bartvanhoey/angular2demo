import {Component} from "@angular/core";

@Component({
  selector : "app-employee-detail",
  templateUrl : "employee-detail.component.html",
  styleUrls: ["employee-detail.component.css"]

})
export class EmployeeDetailComponent {
  columnSpan = 2;
  firstName: string = "Tom";
  lastName: string = "Hopkins";
  age: number = 20;
  gender: string = "Male";
  showDetails: boolean = false;

  toggleDetails(): void{
    this.showDetails =!this.showDetails;
  }
}
