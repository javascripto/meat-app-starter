import { CommonModule } from '@angular/common';
import { OrderService } from 'app/order/order.service';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from './messages/notification.service';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
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
    SnackbarComponent,
  ],
  exports: [
    FormsModule,
    CommonModule,
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent,
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
        NotificationService,
      ]
    };
  }
}
