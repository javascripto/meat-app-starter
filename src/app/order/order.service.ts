import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Order } from './order.model';
import { MEAT_API } from 'app/app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from 'app/app.error-handler';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {
    constructor(
        private http: Http,
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
        const headers = new Headers();
        headers.append('Content-type', 'application/json');

        const url = `${MEAT_API}/orders`;
        const body = JSON.stringify(order);
        const requestOptions = new RequestOptions({headers});

        return this.http.post(url, body, requestOptions)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    clear() {
        this.shoppingCartService.clear();
    }
}
