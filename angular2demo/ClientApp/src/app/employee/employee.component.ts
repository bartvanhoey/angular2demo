import {Component} from "@angular/core";
import {UserPreferencesService} from "./user-preferences.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html"
})


export class EmployeeComponent {


  constructor(private userPreferencesService: UserPreferencesService) {
  }

  firstName: string = "Tom";
  lastName: string = "Tom";

  get colour(): string {
    return this.userPreferencesService.colourPreference
  }

  set colour(colour: string) {
    this.userPreferencesService.colourPreference = colour;
  }
}
