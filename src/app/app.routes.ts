import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './security/loggedIn.guard';
import { LoginComponent } from './security/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:to', component: LoginComponent }, // rotas especificas ficam acima de rotas mais gerericas
  { path: 'login', component: LoginComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'menu' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: 'restaurants', component: RestaurantsComponent },
  // canLoad Não faz carregamento do módulo se o guarda de rota não deixar
  // canActivate controla acesso da rota, mesmo que o módulo ja tenha sido carregado uma vez
  // canDeactivate deve ser declarado em rotas que apontem para um componente, ou seja no modulo de rota onde ele foi declarado
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule',
    canLoad: [ LoggedInGuard ],
    canActivate: [ LoggedInGuard ],
  },
  { path: 'about', loadChildren: './about/about.module#AboutModule' }, // definindo lazy loading para modulo
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: '**', component: NotFoundComponent } // wildcard para bater com urls que não existem - sempre no final do array
];
