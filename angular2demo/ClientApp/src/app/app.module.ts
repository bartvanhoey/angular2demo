import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
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
import {SimpleComponent} from "./others/simple.component";
import {EnsureAcceptHeaderInterceptor} from "../ensure-accept-header-interceptor";
import {PageNotFoundComponent} from "./others/page-not-found.component";
import {EmployeeService} from "./employee/employee.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'counter', component: CounterComponent},
  {path: 'fetch-data', component: FetchDataComponent},
  {path: 'employees', component: EmployeeComponent},
  {path: 'employees/:code', component: EmployeeDetailComponent},
  {path: '**', component: PageNotFoundComponent},
];

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
    EmployeeCountComponent,
    SimpleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployeeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EnsureAcceptHeaderInterceptor,
      multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
