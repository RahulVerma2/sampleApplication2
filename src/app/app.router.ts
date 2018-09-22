import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { RatesComponent } from './rates/rates.component';
    
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children :[
            {
                path: '',
                redirectTo: 'orders',
                pathMatch: 'full'
            },
            {
                path: 'purchase',
                component: PurchaseComponent,
                
            },
            {
                path: 'items',
                component: ItemsComponent,
                
            },
            {
                path: 'orders',
                component: OrdersComponent,
                
            },
            {
                path: 'rates',
                component: RatesComponent,
                
            }

        ]
    },
   

];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);