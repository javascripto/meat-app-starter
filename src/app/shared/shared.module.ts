import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InputComponent,
    RadioComponent, 
    RatingComponent,
  ],
  exports: [
    FormsModule,
    CommonModule,
    InputComponent,
    RadioComponent,
    RatingComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
