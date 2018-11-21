import { Observable } from 'rxjs';
import { Order } from './order.model';
import { MEAT_API } from 'app/app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {
    constructor(
        private http: HttpClient,
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
        return this.http.post<Order>(`${MEAT_API}/orders`, order);
    }

    clear() {
        this.shoppingCartService.clear();
    }
}
