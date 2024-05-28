import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MychartComponent } from './mychart.component';

const routes: Routes = [{ path: '', component: MychartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
