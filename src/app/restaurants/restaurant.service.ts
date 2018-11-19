import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../app.error-handler';
import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  restaurants(search?: string): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`, { params: { q: search }})
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurants(id: string): Observable<any[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(r => r.json())
      .catch(ErrorHandler.handleError);
  }

  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(r => r.json())
      .catch(ErrorHandler.handleError);
  }

}
