import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {

  public notifier: EventEmitter<string|any> = new EventEmitter();

  constructor() { }

  public notify(message: string) {
    this.notifier.emit(message);
  }

}
