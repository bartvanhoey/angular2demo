import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {CounterComponent} from './counter/counter.component';
import {FetchDataComponent} from './fetch-data/fetch-data.component';
import {EmployeeComponent} from './employee/employee.component'
import {EmployeeDetailComponent} from "./employee/employee-detail.component";
import {EmployeeListComponent} from "./employee/employee-list.component"
import {EmployeeTitlePipe} from "./employee/employee-title.pipe";
import {EmployeeCountComponent} from './employee/employee-count.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'counter', component: CounterComponent},
      {path: 'fetch-data', component: FetchDataComponent},
      {path: 'employee', component: EmployeeComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
