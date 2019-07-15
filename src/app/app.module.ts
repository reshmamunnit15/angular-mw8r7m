import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { customTitlePipe } from './custompipe';
import { AppComponent } from './app.component';

import { EmployeecountComponent } from './employeecount/employeecount.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  EmployeecountComponent,customTitlePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
