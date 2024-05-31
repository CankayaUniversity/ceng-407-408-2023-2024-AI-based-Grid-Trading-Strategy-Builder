import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'success', component: SuccessComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];
