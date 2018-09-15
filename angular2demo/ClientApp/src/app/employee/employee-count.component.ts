import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent {
  selectedRadioButtonValue: string = "All";
  @Output()
  countRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;

  onEmployeeCountRadioButtonChanged(){
    this.countRadioButtonChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }



}
