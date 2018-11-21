import { from } from 'rxjs';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { switchMap, tap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
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

  @ViewChild('searchInput') searchInput: ElementRef;

  public searchBarState = 'hidden';
  public restaurants: Restaurant[];

  public searchForm: FormGroup;
  public searchControl: FormControl;

  constructor(private formBuilder: FormBuilder,
              private restaurantService: RestaurantService) {}

  ngOnInit() {
    const fb = this.formBuilder;

    this.searchControl = fb.control('');
    this.searchForm = fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(searchTerm => console.log(`?q=${searchTerm}`)),
        switchMap(searchTerm =>
          this.restaurantService
            .restaurants(searchTerm)
            .pipe(catchError(() => from([]))))
      ).subscribe(restaurants => this.restaurants = restaurants);

      // debouceTime atrasa a request antes de enviar ate q a valores de input deixem de mudar
      // distinctUntilChanged  Só dispara cadeia caso valor seja diferente do anterior
      // do funciona como um middleware
      // switchMap faz unsubscribe de request anterior para q o retorno dela nao sobrescreva o retorno da ultima request
      // O tratamento do erro em catch retorna um Observable vazio para não quebrar a stream

    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  public toggleSearchVisibility(): void {
    const input = this.searchInput.nativeElement;

    if (this.searchBarState === 'hidden') {
      this.searchBarState = 'visible';
      input.focus();
    } else {
      this.searchBarState = 'hidden';
      input.blur();
    }
  }

}
