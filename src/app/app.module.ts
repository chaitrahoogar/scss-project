import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {appRouterModule} from './app.routes';
import { RegisterComponent } from './register/register.component';
import { ComponentRepositoryComponent } from './component-repository/component-repository.component';
import { LogInComponent } from './login/login.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { ManagerComponent } from './manager/manager.component';
import { LeadComponent } from './lead/lead.component';
import { EqualValidator } from './equal-validator.directive';
import { HttpModule } from '@angular/http';
import { WorkbenchComponent } from './workbench/workbench.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { FilterPipe } from './component-repository/component-repository.component';
import { DatepickerModule } from 'angular2-material-datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule } from 'ng2-popover';
import {SearchPeopleComponent} from './component-repository/searchPeople/search-people.component';
import {SearchComponent} from './component-repository/search/search.component';
import { ToastrModule } from 'toastr-ng2';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ComponentRepositoryComponent,
    LogInComponent,
    PasswordresetComponent,
    ManagerComponent,
    LeadComponent,
    EqualValidator,
    WorkbenchComponent,
    UpdatepasswordComponent,
    MessagePageComponent,
    FilterPipe,
    SearchPeopleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule,
    HttpModule,
    DatepickerModule,
    BrowserAnimationsModule,
    PopoverModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
