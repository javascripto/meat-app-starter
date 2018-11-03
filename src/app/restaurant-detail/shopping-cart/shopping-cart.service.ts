import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService{
    items: CartItem[] = [];

    constructor() {
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
            itemFound.quantity++;
        } else {
            this.items.push(new CartItem(item));
        }

        this.save();
    }

    removeItem(item: MenuItem) {
        const itemFoundIndex = this.items.findIndex(cItem => {
            return cItem.menuItem.id === item.id;
        });
        this.items.splice(itemFoundIndex, 1);

        this.save();
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
