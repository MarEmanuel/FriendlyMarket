import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { BillToPayModalComponent } from './components/bill-to-pay-modal/bill-to-pay-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailedProductComponent,
    MyCartComponent,
    BillToPayModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
