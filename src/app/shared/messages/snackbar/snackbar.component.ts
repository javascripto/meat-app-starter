import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs/Observable';
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

  message: string = 'Hello dear';
  snackVisibility: string = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier.subscribe(message => {
      this.message = message;
      this.snackVisibility = 'visible';

      Observable.timer(3000).subscribe(timer => this.snackVisibility = 'hidden');
    });
  }

}
