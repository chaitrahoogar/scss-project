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
    MessagePageComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
