import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './security/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
// import { CoreModule } from './core/core.module'; // Depreciado pelo metodo estatico do SharedModule que retorna um modulo com providers

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    ReviewsComponent,
    MenuItemComponent,
    NotFoundComponent,
    RestaurantComponent,
    RestaurantsComponent,
    OrderSummaryComponent,
    ShoppingCartComponent,
    RestaurantDetailComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    // No OrderModule o SharedModule é importado
    // sem invocar o método forRoot (sem os providers)
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  // Serviços disponivel em todos componentes deste módulo
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    // Alterando padrão de rotas  com cerquilha semelhante ao angular.js
    // para ambientes onde não se tem total controle da hospedagem
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
