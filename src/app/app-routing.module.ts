import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from 'src/app/component/login/login.component';
import { RegistrationFormComponent} from 'src/app/component/registration-form/registration-form.component';
import {SelectComponentComponent} from 'src/app/component/select-component/select-component.component';
import {SimpleInterestComponent} from 'src/app/component/simple-interest/simple-interest.component';
import {CountriesComponent} from 'src/app/component/countries/countries.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'role', component: SelectComponentComponent },
  { path: 'simpleInterest', component: SimpleInterestComponent },
  { path: 'countries', component: CountriesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
