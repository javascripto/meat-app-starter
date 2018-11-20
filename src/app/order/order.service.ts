import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Order } from './order.model';
import { MEAT_API } from 'app/app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from 'app/security/login/login.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {
    constructor(
        private http: HttpClient,
        private loginService: LoginService,
        private shoppingCartService: ShoppingCartService,
    ) {}

    itemsValue(): number {
        return this.shoppingCartService.total();
    }

    cartItems(): CartItem[] {
        return this.shoppingCartService.items;
    }

    increaseQty(item: CartItem) {
        this.shoppingCartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.shoppingCartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.shoppingCartService.remove(item);
    }

    checkOrder(order: Order): Observable<Order> {
        let headers = new HttpHeaders();

        if (this.loginService.isLoggedIn()) {
            const { accessToken } = this.loginService.user;
            headers = headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return this.http.post<Order>(`${MEAT_API}/orders`, order, { headers });
    }

    clear() {
        this.shoppingCartService.clear();
    }
}
