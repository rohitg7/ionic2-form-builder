import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { FormBase } from './formbase.ts';
import { FormControlService } from './formcontrolservice.ts';
import { DynamicFormFieldComponent } from './df-field.component';

@Component({
  selector:'dynamic-form',
  templateUrl: 'build/pages/dynamic-form/dynamic-form.html',
  directives: [DynamicFormFieldComponent],
  providers:  [FormControlService]
})
export class DynamicFormComponent {
  @Input() fields: FormBase<any>[] = [];
  @Output('send') submitted: EventEmitter<any> = new EventEmitter();
  form: ControlGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) {  }
  
  ngOnInit(){
    this.form = this.qcs.toControlGroup(this.fields);
  }
   
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.submitted.emit(this.form.value);
  }
}


