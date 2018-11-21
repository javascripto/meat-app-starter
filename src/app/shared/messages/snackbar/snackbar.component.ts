import { Observable, timer } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-snackbar',
  styleUrls: ['./snackbar.component.css'],
  templateUrl: './snackbar.component.html',
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px',
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden  => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  public message = 'Hello dear';
  public snackVisibility = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // switchMap troca o Observable e os eventos que seriam emitidos
    // Antes notifier recebia eventos de strings, agora com os operadores tap e switchMap,
    // a ação feita no subscribe passa a ser feita no tap, depois o switchMap troca o Observable
    // por um timer e o subscribe é executado quanto o timer atingir o tempo informado.
    // com switchMap, o timer anterior é desinscrito antes de definir um novo timer.
    this.notificationService.notifier
      .pipe(
        tap(message => {
          this.message = message;
          this.snackVisibility = 'visible';
        }),
        switchMap(message => timer(3000))
      ).subscribe(timer => this.snackVisibility = 'hidden');
  }

}
