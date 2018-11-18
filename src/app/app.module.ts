import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    ReviewsComponent,
    MenuItemComponent,
    RestaurantComponent,
    RestaurantsComponent,
    OrderSummaryComponent,
    ShoppingCartComponent,
    RestaurantDetailComponent,
  ],
  imports: [
    HttpModule,
    CoreModule,
    SharedModule,
    RouterModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ // Serviços disponivel em todos componentes deste módulo
    {
      useValue: 'pt-BR',
      provide: LOCALE_ID,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
