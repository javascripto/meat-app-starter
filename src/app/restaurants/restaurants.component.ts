import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  // providers: [RestaurantService], // Serviço disponivel para componente e filhos
  // viewProviders: [RestaurantService], // Serviço disponivel apenas no componente
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.restaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }

}
