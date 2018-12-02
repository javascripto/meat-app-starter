import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  public delivery = 8;
  public orderForm: FormGroup;
  public orderCreated: Order;

  public paymentOptions: RadioOption[] = [
    { label: 'Dinheiro',           value: 'MON' },
    { label: 'Cartão de Débito',   value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REF' },
  ];

  static equalsTo(group: AbstractControl): { [key: string]: boolean} {
    const email             = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if ((email.value  && emailConfirmation.value) &&
        (email.value !== emailConfirmation.value)) {
      return { emailsNotMatch: true };
    }
    return undefined;
  }

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private orderService: OrderService) { }

  ngOnInit() {
    this.applyFormValidators();
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
    const { name, email,
      emailConfirmation, number,
      address, paymentOption, optionalAddress
    } = order;

    const orderItems = this.cartItems().map(cartItem => {
      const { quantity, menuItem } = cartItem;
      return new OrderItem(quantity, menuItem.id);
    });

    const newOrder = new Order(
      name, email, emailConfirmation,
      address, number, optionalAddress,
      paymentOption, orderItems
    );

    this.orderService.checkOrder(newOrder)
      .pipe(tap((order: Order) => this.orderCreated = order))
      .subscribe(responseOrder => {
        this.orderService.clear();
        this.router.navigate(['/order-summary']);
      });
  }

  public applyFormValidators(): void {
    const fb = this.formBuilder;
    const V = Validators;
    const emailPattern = new RegExp(
      `^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".` +
      `+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$`, 'i'
    );

    const numberPattern = /^[0-9]*$/;

    // name: new FormControl('', { updateOn: 'blur', validators: [V.required]})

    this.orderForm = new FormGroup({
      optionalAddress:   fb.control(''),
      name:              fb.control('', [V.required, V.minLength(5)]),
      address:           fb.control('', [V.required, V.minLength(5)]),
      paymentOption:     new FormControl(''),
      // paymentOption:     new FormControl('', { validators: [V.required]}),
      email:             fb.control('', [V.required, V.pattern(emailPattern)]),
      number:            fb.control('', [V.required, V.pattern(numberPattern)]),
      emailConfirmation: fb.control('', [V.required, V.pattern(emailPattern)]),
    }, { validators: [OrderComponent.equalsTo], updateOn: 'blur'});
  }

  public isOrderCompleted(): boolean {
    return !!this.orderCreated;
  }

}
