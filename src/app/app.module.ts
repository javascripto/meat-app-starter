import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { CoreModule } from './core/core.module'; // Depreciado pelo metodo estatico do SharedModule que retorna um modulo com providers

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
    NotFoundComponent,
  ],
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {
      preloadingStrategy: PreloadAllModules
    }),
    SharedModule.forRoot(), // no OrderModule o SharedModule é importado sem invocar o método forRoot (sem os providers)
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
