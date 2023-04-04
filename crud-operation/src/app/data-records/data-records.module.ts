import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRecordsRoutingModule } from './data-records-routing.module';
import { DataRecordsComponent } from './data-records.component';
import { JsonApiComponent } from './json-api/json-api.component';
import { GithubComponent } from './github/github.component';


@NgModule({
  declarations: [
    DataRecordsComponent,
    JsonApiComponent,
    GithubComponent
  ],
  imports: [
    CommonModule,
    DataRecordsRoutingModule
  ]
})
export class DataRecordsModule { }
