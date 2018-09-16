import {Component} from "@angular/core";
import {Employee} from "./IEmployee";



@Component({
  selector: 'app-employee-list',
  templateUrl: '/employee-list.component.html',
  styleUrls: ['/employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[];

  selectedEmployeeCountRadioButton: string = "All";

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }


  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(x => x.gender === 'Male').length;
  }

  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(x => x.gender === 'Female').length;
  }

  constructor() {
    this.employees = [
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '6/25/1988'
      },
      {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '6/9/1982'
      },
      {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '8/12/1979'
      },
      {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '10/14/1980'
      },
      {
        code: 'emp105', name: 'Nancy', gender: 'Female',
        annualSalary: 6700.826, dateOfBirth: '12/15/1982'
      },
      {
        code: 'emp106', name: 'Steve', gender: 'Male',
        annualSalary: 7700.481, dateOfBirth: '11/18/1979'
      }
    ];
  }


}
