import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductsComponent} from './allcomponents/products/products.component'
import {LoginComponent} from './allcomponents/login/login.component'
import { SignupComponent } from './allcomponents/signup/signup.component';
import { CartComponent } from './allcomponents/cart/cart.component';
import { ShowcartComponent } from './allcomponents/showcart/showcart.component';
import { FilterproductComponent } from './allcomponents/filterproduct/filterproduct.component';

const routes: Routes = [
    {
        path:"Allproducts",
        component:ProductsComponent
    },
    
    {
        path:'filter/:name',
        component:FilterproductComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'cart/:name',
        component:CartComponent
    },
    {
        path:'dcart',
        component:ShowcartComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
