import { Component } from '@angular/core';

// > Importe de los modelos a usarse.
import { Product } from '../../models/producto-model';
import { CartModel } from '../../services/my-cart-service';

// > Importe de los servicios (animaciones) a usarse.
import { SnackBarService } from '../../animations/snack-bar-animation';

@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrls: ['./detailed-product.component.css']
})
export class DetailedProductComponent {

  constructor(private cartModel: CartModel, private snackBar: SnackBarService) {}

  // > Instanciamiento de objeto "product", que guarda los elementos del producto seleccionado.
  product: Product = new Product();

  // > ngOnInit recibe desde "history" (paso de información entre componentes) el producto seleccionado y lo almacena.
  ngOnInit(): void {
    this.product = history.state.product;
  }

  // > addToCart llama a la función de la clase "CartModel" y envía el producto y su cantidad.
  addToCart(quantity: number): void {
    this.cartModel.addToCart(this.product, quantity);
    this.snackBar.openSnackBar(`${this.product.title} ha sido añadido al carrito.`, 'Aceptar')
  }
}
