import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  // providers: [RestaurantService], // Serviço disponivel para componente e filhos
  // viewProviders: [RestaurantService], // Serviço disponivel apenas no componente
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out')) // wildcard de trasição de estados
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  public searchBarState = 'hidden';
  public restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.restaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }

  public toggleSearch(): void {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
