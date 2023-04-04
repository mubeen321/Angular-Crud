import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataRecordsComponent } from './data-records.component';

const routes: Routes = [{ path: '', component: DataRecordsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRecordsRoutingModule { }
