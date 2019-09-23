import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { QueryComponent } from './query/query.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { UtilsModule } from './utils/module';

import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarHeaderComponent } from './utils/calendar-header';




const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'query', component: QueryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    QueryComponent,
    CalendarHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [CalendarHeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


