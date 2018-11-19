import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  public rate = 0;
  public previousRate: number;
  public rates: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() { }

  public setRate(r: number): void {
    this.rate = r;
    this.rated.emit(r);
    this.previousRate = undefined;
  }

  public setTemporaryRate(r: number): void {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }
  public clearTemporaryRate(): void {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
