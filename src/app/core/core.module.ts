import { NgModule } from '@angular/core';
import { OrderService } from 'app/order/order.service';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';

@NgModule({
  providers: [
    OrderService,
    RestaurantService,
    ShoppingCartService,
  ]
})
export class CoreModule { }
