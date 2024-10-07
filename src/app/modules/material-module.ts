// > Módulo usado para los "angular-materials", que son diseños prefabricados en Angular para los formularios y elementos estéticos.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// > Formularios.
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

// > Animaciones.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// > Angular Material: Cartas, Inputs, Selects, Progresos.
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule} from '@angular/material/grid-list';

// > Angular Material: Barras de navegación e íconos.
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// > Angular Material: Tablas, modales, paginación y alertas.
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule} from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';

import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSortModule,
    MatTreeModule,
    MatStepperModule
  ]
})
export class MaterialModule { }
