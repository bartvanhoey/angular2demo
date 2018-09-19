import {Component, OnInit} from "@angular/core";
import {IEmployee} from "./employee";
import {EmployeeService} from "./employee.service";


@Component({
  selector: 'app-employee-list',
  templateUrl: '/employee-list.component.html',
  styleUrls: ['/employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  selectedEmployeeCountRadioButton: string = "All";
  statusMessage: string = "Loading data. Please wait...";

  constructor(private employeeService: EmployeeService) {

  }

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

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      response => this.employees = response as IEmployee[],
         () => {this.statusMessage = 'Problem with the service. Try again later!'}
    );
  }
}
