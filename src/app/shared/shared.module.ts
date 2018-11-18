import { CommonModule } from '@angular/common';
import { OrderService } from 'app/order/order.service';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';

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
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        OrderService,
        RestaurantService,
        ShoppingCartService,
      ]
    };
  }
}
