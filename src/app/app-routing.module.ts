import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// > Importe de los componentes creados.
import { ProductsComponent } from './components/products/products.component';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  // > "productos", "detalle-producto" y "carrito" cuentan con un canActivate porque solo son accesibles si el usuario ha iniciado sesión.
  {path: "productos", component: ProductsComponent, canActivate: [AuthGuard]},
  {path: "detalle-producto", component: DetailedProductComponent, canActivate: [AuthGuard]},
  {path: "carrito", component: MyCartComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},

  // > En caso que se desee acceder a un componente no creado o inválido, es redirigido al login.
  {path:"**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
