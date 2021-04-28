import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContainerComponent } from './component/container/container.component';
import { FormsModule } from '@angular/forms';
import { NameSortPipe } from './pipes/name-sort.pipe';
import { DateToAgePipe } from './pipes/date-to-age.pipe';
import { AppHighlightDirective } from './directive/app-highlight.directive';
import { CountriesComponent } from './component/countries/countries.component';
import { ChildComponent } from './component/child/child.component';
import { ParentComponent } from './component/parent/parent.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { RouteDemoComponent } from './component/route-demo/route-demo.component';
import { AadharComponent } from './component/aadhar/aadhar.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    NameSortPipe,
    DateToAgePipe,
    AppHighlightDirective,
    CountriesComponent,
    ChildComponent,
    ParentComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    RouteDemoComponent,
    AadharComponent,
    RegistrationFormComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
