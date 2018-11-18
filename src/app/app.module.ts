import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { OrderService } from './order/order.service';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantService } from './restaurants/restaurant.service';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OrderComponent,
    HeaderComponent,
    ReviewsComponent,
    MenuItemComponent,
    RestaurantComponent,
    OrderItemsComponent,
    RestaurantsComponent,
    OrderSummaryComponent,
    ShoppingCartComponent,
    DeliveryCostsComponent,
    RestaurantDetailComponent,
  ],
  imports: [
    HttpModule,
    SharedModule,
    RouterModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ // Serviços disponivel em todos componentes deste módulo
    OrderService,
    RestaurantService,
    ShoppingCartService,
    {
      useValue: 'pt-BR',
      provide: LOCALE_ID,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
