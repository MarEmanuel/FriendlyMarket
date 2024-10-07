import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartItem } from '../../models/my-cart-model';

// > Componente cuya finalidad es presentar un MODAL (diálogo flotante) con los datos de la factura.
@Component({
  selector: 'app-bill-to-pay-modal',
  templateUrl: './bill-to-pay-modal.component.html',
  styleUrls: ['./bill-to-pay-modal.component.css']
})
export class BillToPayModalComponent {
  billNumber: number;

  constructor(
    public dialogRef: MatDialogRef<BillToPayModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { items: CartItem[], totalAmount: number }
  ) {
    this.billNumber = Math.floor(Math.random() * 9000) + 1000;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

