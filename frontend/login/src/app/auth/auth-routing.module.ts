// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; // Import LoginComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Add route for LoginComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect empty path to '/login'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
