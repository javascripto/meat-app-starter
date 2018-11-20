import { NgModel, FormControlName } from '@angular/forms';
import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { asTextData } from '@angular/core/src/view';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, AfterContentInit {
  public input: any;
  @Input() label: string;
  @Input() showTip = true;
  @Input() errorMessage: string;
  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control;

    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName');
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
