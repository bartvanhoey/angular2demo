import {Component} from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html"
})
export class EmployeeComponent {
  isBold: boolean = true;
  fontSize: number = 20;
  isItalic: boolean = true;

  addStyle(){
    return {
      'font-size.px': this.fontSize,
      'font-style': this.isItalic ? 'italic': 'normal',
      'font-weight': this.isBold? 'bold': 'normal',
    }
  }


}
