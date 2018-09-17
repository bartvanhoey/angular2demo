import {Component, OnInit} from "@angular/core";
import {IEmployee} from "./employee";
import {EmployeeService} from "./employee.service";


@Component({
  selector: 'app-employee-list',
  templateUrl: '/employee-list.component.html',
  styleUrls: ['/employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit{
  employees: IEmployee[];
  selectedEmployeeCountRadioButton: string = "All";

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
    this.employees = this.employeeService.getEmployees();
  }

  //DESKTOP-HHLDTE1\SQLSERVER2017STA


}
