import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { LeaveOrderGuard } from './leave-order.guard';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

// canDeactivate está associado a um componente
const ROUTES: Routes = [
  { path: '', component: OrderComponent, canDeactivate: [ LeaveOrderGuard ] }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
  ]
})
export class OrderModule { }
