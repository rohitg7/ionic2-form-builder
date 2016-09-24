import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { FormBase } from './formbase.ts';

@Component({
  selector:'df-field',
  templateUrl: 'build/pages/dynamic-form/df-field.html'
})
export class DynamicFormFieldComponent {
  @Input() field:FormBase<any>;
  @Input() form:ControlGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}
