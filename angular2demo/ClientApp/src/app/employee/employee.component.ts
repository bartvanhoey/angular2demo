import {Component} from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html"
})
export class EmployeeComponent {
  pageHeader: string = "Employee Details";
  imagePath = "Images/Logo.JPG";
  firstName: string = "Tom";
  lastName: string = "Hopkings";
  isDisabled: boolean = false;

  classesToApply: string = "italicsClass boldClass";
  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = false;

  getFullName(): string {
    return this.firstName + " " + this.lastName
  }

  addClasses(){
    return {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass
    };
  }
}
