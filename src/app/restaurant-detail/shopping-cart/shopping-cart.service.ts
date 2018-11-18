import { Injectable } from "@angular/core";
import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { NotificationService } from "app/shared/messages/notification.service";

@Injectable()
export class ShoppingCartService{
    items: CartItem[] = [];

    constructor(private notificationService: NotificationService) {
        this.load();
    }

    clear() {
        this.items = [];
        this.save();
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }

    addItem(item: MenuItem) {
        const itemFound = this.items.find(cItem => {
            return cItem.menuItem.id === item.id;
        });

        if (itemFound) {
            this.increaseQty(itemFound);
        } else {
            this.items.push(new CartItem(item));
        }
        this.notificationService.notify(`Você adicionou um item ${item.name}`);
        this.save();
    }

    removeItem(item: CartItem) {
        const itemFoundIndex = this.items.findIndex(cItem => {
            return cItem.menuItem.id === item.menuItem.id;
        });
        this.items.splice(itemFoundIndex, 1);

        this.notificationService.notify(`Você removeu um item ${item.menuItem.name}`);
        this.save();
    }

    increaseQty(item: CartItem) {
        item.quantity++;
        this.save();
    }

    decreaseQty(item: CartItem) {
        item.quantity--;
        if (!item.quantity) {
            this.remove(item);
        }
        this.save();
    }

    remove(item: CartItem) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

    save() {
        sessionStorage.setItem(
            'shoppingCart',
            JSON.stringify(this.items));
    }

    load() {
        JSON.parse(sessionStorage.getItem('shoppingCart') || '[]')
            .forEach(item => new Array(item.quantity)
                .fill(0)
                .forEach(() => this.addItem(item.menuItem)));
    }
}
