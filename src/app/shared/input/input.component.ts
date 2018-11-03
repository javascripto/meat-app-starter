import { NgModel } from '@angular/forms';
import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, AfterContentInit {
  input: any;
  @Input() label: string;
  @Input() errorMessage: string;
  @ContentChild(NgModel) model: NgModel;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model;

    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel');
    }
  }

  hasError() {
    const input = this.input;
    return input.invalid && (input.dirty || input.touched);
  }

  hasSuccess() {
    const input = this.input;
    return input.valid && (input.dirty || input.touched);
  }

}
