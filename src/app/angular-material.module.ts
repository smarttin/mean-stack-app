import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule
} from "@angular/material";

@NgModule({
  exports: [
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ]
})
export class AngularMaterialModule {}