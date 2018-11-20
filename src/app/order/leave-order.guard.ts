import { Injectable } from '@angular/core';
import { OrderComponent } from './order.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(component: OrderComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot): boolean {
    if (!component.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?');
    } else {
      return true;
    }
  }
}
