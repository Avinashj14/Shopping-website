import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './allcomponents/products/products.component';

import { LoginComponent } from './allcomponents/login/login.component';
import { SignupComponent } from './allcomponents/signup/signup.component';
import { CartComponent } from './allcomponents/cart/cart.component';
import { ShowcartComponent } from './allcomponents/showcart/showcart.component';
import { FilterproductComponent } from './allcomponents/filterproduct/filterproduct.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    ShowcartComponent,
    FilterproductComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
