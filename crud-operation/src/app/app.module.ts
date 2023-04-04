import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from "@angular/material/dialog";
import {MatRadioModule} from '@angular/material/radio';

import { HttpClientModule } from "@angular/common/http";

import { RecordsComponent } from './records/records.component';
import { FormComponent } from './form/form.component';
import { NotFounfComponent } from './not-founf/not-founf.component';
import { FormRecordsComponent } from './form-records/form-records.component';
import { ApiCompoComponent } from './api-compo/api-compo.component';
import { PromiseCompoComponent } from './promise-compo/promise-compo.component';
import { ResolverCompoComponent } from './resolver-compo/resolver-compo.component';
import { ArrayObjComponent } from './array-obj/array-obj.component';
import { JquerydemoComponent } from './jquerydemo/jquerydemo.component';
import { AppInitService } from './app-init.service';
import { AppInitComponent } from './app-init/app-init.component';
import { ValidatorsComponent } from './validators/validators.component';
import { ExcelDataComponent } from './excel-data/excel-data.component';
import { ChildRecordsComponent } from './form/child-records/child-records.component';

export function basicLoader(){
  return () => {
    console.log("basic loader");
    return Promise.resolve();
  };
    
}

export function apiCall(appLoader: AppInitService){
  return () => appLoader.init() .then(data => console.log("api dataa : ",data));;    
}


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    FormComponent,
    NotFounfComponent,
    FormRecordsComponent,
    ApiCompoComponent,
    PromiseCompoComponent,
    ResolverCompoComponent,
    ArrayObjComponent,
    JquerydemoComponent,
    AppInitComponent,
    ValidatorsComponent,
    ExcelDataComponent,
    ChildRecordsComponent
  ],
  // entryComponents: [PopupformComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    HttpClientModule,
    MatPaginatorModule,
    MatRadioModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: basicLoader,
      deps: [],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: apiCall,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

