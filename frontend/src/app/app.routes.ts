import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PanelComponent } from './panel/panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MychartComponent } from './mychart/mychart.component';
import { HistoryStrategiesComponent } from './history-strategies/history-strategies.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'dashboard', component: DashboardComponent,
   children: [{
       path: 'mychart', component: MychartComponent},
       {path: 'history-strategies', component: HistoryStrategiesComponent}
       ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
