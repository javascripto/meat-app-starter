import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {

  public notifier: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public notify(message: string) {
    this.notifier.emit(message);
  }

}
