import {Component} from "@angular/core";

@Component({
  selector : "app-employee-detail",
  templateUrl : "employee-detail.component.html",
  styleUrls: ["employee-detail.component.css"]

})
export class EmployeeDetailComponent {
  firstName: string = "Tom";
  lastName: string = "Hopkins";
  age: number = 20;
  gender: string = "Male";
}
