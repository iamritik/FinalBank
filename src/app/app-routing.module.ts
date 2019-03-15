import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoanComponent } from './loan/loan.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './auth.guard';
import { DepositComponent } from './deposit/deposit.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
    path:'',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'menu',
    component:MenuComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'loan',
        component:LoanComponent
      },
      {
        path:'contactus',
        component:ContactusComponent
      },
      {
        path:'deposit',
        component:DepositComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
