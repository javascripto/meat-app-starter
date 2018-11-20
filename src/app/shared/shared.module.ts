import { CommonModule } from '@angular/common';
import { OrderService } from 'app/order/order.service';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggedInGuard } from 'app/security/loggedIn.guard';
import { RatingComponent } from './rating/rating.component';
import { LeaveOrderGuard } from 'app/order/leave-order.guard';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthInterceptor } from 'app/security/auth.interceptor';
import { LoginService } from 'app/security/login/login.service';
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
        LoginService,
        LoggedInGuard,
        LeaveOrderGuard,
        RestaurantService,
        ShoppingCartService,
        NotificationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    };
  }
}
