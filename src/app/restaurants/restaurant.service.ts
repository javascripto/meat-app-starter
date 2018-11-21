import { Observable } from 'rxjs';
import { Review } from './review.model';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) { }

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;

    if (search) {
      // json-server tambem aceita queries de pesquisa
      params = new HttpParams().append('q', search);
    }

    const url = `${MEAT_API}/restaurants`;
    return this.http.get<Restaurant[]>(url, { params });
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
  }

  reviewsOfRestaurants(id: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }

}
