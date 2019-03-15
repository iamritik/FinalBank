import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DbService } from './services/db.service';
import { MenuComponent } from './menu/menu.component';
import { LoanComponent } from './loan/loan.component';
import { CalcService } from './services/calc.service';
import { ContactusComponent } from './contactus/contactus.component';
import { SecurityService } from './services/security.service';
import { DepositComponent } from './deposit/deposit.component';
import { ProfileComponent } from './profile/profile.component';
import { ForProfileService } from './services/for-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    LoanComponent,
    ContactusComponent,
    DepositComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DbService,CalcService,SecurityService,ForProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
