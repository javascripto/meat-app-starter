import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mt-reviews',
    templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
    public reviews: Observable<any>;

    constructor(
        private route: ActivatedRoute,
        private restaurantService: RestaurantService,
    ) {}

    ngOnInit() {
        const restaurantId = this.route.parent.snapshot.params['id'];
        this.reviews = this.restaurantService.reviewsOfRestaurants(restaurantId);
    }
}
