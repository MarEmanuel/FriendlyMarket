import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/my-cart-model';
import { CartModel } from '../../services/my-cart-service';
import { BillToPayModalComponent } from '../bill-to-pay-modal/bill-to-pay-modal.component';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  items: CartItem[] = [];
  totalAmount: number = 0;

  constructor(private cartModel: CartModel, public dialog: MatDialog) {}

  // > Método de inicio que ejecuta loadCartItems().
  ngOnInit(): void {
    this.loadCartItems();
  }

  // > Recibe de "CartModel" los elementos existentes del carrito, y calcula (entre todos los productos ahí existentes) el valor a pagar.
  loadCartItems(): void {
    this.items = this.cartModel.getItems();
    this.calculateTotalAmount();
  }

  // > Llamada al métood que elimina un producto del carrito, y vuelve a cargar la lista con los productos restantes.
  removeFromCart(productId: number): void {
    this.cartModel.removeFromCart(productId);
    this.loadCartItems();
  }

  // > Llamada al método que vacía todos los elementos del carrito, y vuelve a cargar la lista.
  clearCart(): void {
    this.cartModel.clearCart();
    this.loadCartItems();
  }

  // > Calcula el valor a pagar iterando por todos los elementos presentes en la lista.
  calculateTotalAmount(): void {
    this.totalAmount = this.items.reduce((total, item) => total + item.totalPrice, 0);
  }

  // > Función que abre el modal de la factura, llamando al métood BillToPayModal, que recibe el valor a pagar y los items a comprar.
  buyItems(): void{
    const dialogRef = this.dialog.open(BillToPayModalComponent, {
      data: {
        items: this.items,
        totalAmount: this.totalAmount
      }
    });
  }
}
