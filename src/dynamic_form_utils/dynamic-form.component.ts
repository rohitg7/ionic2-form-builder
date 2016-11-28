import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup }                              from '@angular/forms';
import { FormBase }                               from './formbase';
import { FormControlService }                     from './formcontrolservice';

@Component({
  selector:'dynamic-form',
  templateUrl: 'dynamic-form.html'
})
export class DynamicFormComponent {
  @Input() fields: FormBase<any>[] = [];
  @Output('send') submitted: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  payLoad = '';

  constructor(public qcs: FormControlService) {  }

  ngOnInit(){
    this.form = this.qcs.toControlGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
