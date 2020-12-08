import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatBadgeModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatButtonModule,
  MatChipsModule,
  MatNativeDateModule,
  MatListModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatChipsModule,
    MatNativeDateModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatChipsModule,
    MatNativeDateModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class MaterialModule { }
