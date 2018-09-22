import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { routes } from './app.router';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatDatepickerModule,  MatNativeDateModule} from '@angular/material';
 
import { MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';





import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { OrdersComponent } from './orders/orders.component';
import { RatesComponent } from './rates/rates.component';
import { DateFormatPipe } from './pipes/date-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemsComponent,
    DashboardComponent,
    PurchaseComponent,
    OrdersComponent,
    RatesComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routes,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
