import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { ProductsService } from '../../services/products-service';
import { Product } from '../../models/producto-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  availableProducts: Product[] = [];
  availableCategories: string[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string | null = null;

  constructor(private productService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // > Dentro de los productos recibidos, se extraen sus categorías usando un SET, que no permite datos repetidos.
  getCategories(): void {
    const uniqueCategories = new Set<string>();
    this.availableProducts.forEach(product => {
      uniqueCategories.add(product.category);
    });

    uniqueCategories.add("Todas las categorías")
    this.availableCategories = Array.from(uniqueCategories);
  }

  // > Llamada al método que envía la petición de recepción de los productos existentes.
  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.availableProducts = data;
        this.getCategories();
        this.filteredProducts = data;
      },
      error: (err) => {
        console.error('Hubo un error al recibir los productos.', err);
      }
    });
  }

  // > Si la categoría de filtrado cambia, se vuelven a mostrar los productos que estén dentro de dicha categoría.
  changeCategory(): void {
    if (this.selectedCategory) {
      this.filteredProducts = this.availableProducts.filter(
        product => product.category === this.selectedCategory);
    }
    if (this.selectedCategory === "Todas las categorías") {
      this.filteredProducts = this.availableProducts;
    }
  }

  // > Redirección al componente "detalle-producto", que envía un objeto "product" del producto seleccionado.
  openDetailedProduct(productId: number): void {
    const product: Product = this.availableProducts[productId - 1];

    this.router.navigate(['/detalle-producto'], {
      state: {
        product
      }
    });
  }
}
