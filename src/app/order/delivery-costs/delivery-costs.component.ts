import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number = 0;
  @Input() itemsValue: number = 0;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return Number(this.delivery) + Number(this.itemsValue);
  }
}
