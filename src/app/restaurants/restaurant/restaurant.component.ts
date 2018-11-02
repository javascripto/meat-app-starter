import { Restaurant } from './restaurant.model';
import { Component , Input} from '@angular/core';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent {

  @Input() restaurant: Restaurant;

  constructor() { }

}
