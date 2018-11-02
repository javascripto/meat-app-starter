import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mt-restaurant-detail',
    templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
    public restaurant: Restaurant;

    constructor(
        private route: ActivatedRoute,
        private restaurantService: RestaurantService,
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];

        this.restaurantService.restaurantById(id)
            .subscribe(restaurant => {
                this.restaurant = restaurant;
            });
    }
}
