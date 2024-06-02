import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PanelComponent } from './panel/panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MychartComponent } from './mychart/mychart.component';
import { HistoryStrategiesComponent } from './history-strategies/history-strategies.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'panel', component: PanelComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [{
      path: 'mychart/:id', component: MychartComponent
    },
    { path: 'history-strategies', component: HistoryStrategiesComponent },
    { path: 'home', component: HomeComponent },
    { path: 'new-strategy', component: FormComponent },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
