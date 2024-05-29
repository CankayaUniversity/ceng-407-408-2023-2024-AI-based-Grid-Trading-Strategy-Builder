import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'', component: HomeComponent},
  {path:'error',component: ErrorComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
