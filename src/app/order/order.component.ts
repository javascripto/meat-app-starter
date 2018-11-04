import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro',           value: 'MON' },
    { label: 'Cartão de Débito',   value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REF' },
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {

  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    const { number, address, paymentOption, optionalAddress} = order;

    const orderItems = this.cartItems().map(cartItem => {
      const { quantity, menuItem } = cartItem;
      return new OrderItem(quantity, menuItem.id);
    });

    const newOrder = new Order(address, number, optionalAddress, paymentOption, orderItems);

    this.orderService.checkOrder(newOrder)
      .subscribe(order => {
        console.log(`Compra concluída: ${order.id}`, order);
        this.orderService.clear();
      });
  }

}
