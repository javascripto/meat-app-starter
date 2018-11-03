import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantService } from '../../restaurants/restaurant.service';

@Component({
    selector: 'mt-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    items: Observable<MenuItem[]>;

    constructor(
        private route: ActivatedRoute,
        private restaurantService: RestaurantService,
    ) {}

    ngOnInit() {
        const id = this.route.parent.snapshot.params['id'];

        this.items = this.restaurantService.menuOfRestaurants(id);
    }
}
