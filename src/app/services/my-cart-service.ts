import { Injectable } from '@angular/core';
import { Product } from '../models/producto-model';
import { CartItem } from '../models/my-cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartModel {
  private items: CartItem[] = [];

  // > Se añaden elementos al carrito. Si el producto ya existe dentro del carrito, se actualiza su cantidad y valor a pagar.
  addToCart(product: Product, quantity: number): void {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.totalPrice = existingItem.quantity * product.price;
    } else {
      this.items.push({ product, quantity, totalPrice: product.price * quantity });
    }
  }

  // > Retorna los items existentes en el carrito de compras.
  getItems(): CartItem[] {
    return this.items;
  }

  // > Elimina un elemento del carrito de compras.
  removeFromCart(productId: number): void {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  // > Establece el arreglo de los datos como vacío.
  clearCart(): void {
    this.items = [];
  }
}
