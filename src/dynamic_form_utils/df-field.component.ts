import { Component , Input } from '@angular/core'; // , /*Injectable,*/  Output, EventEmitter
import { FormGroup }         from '@angular/forms'; /*, FormBuilder, Validators*/
import { FormBase }          from './formbase';

@Component({
  selector   : 'df-field',
  templateUrl: 'df-field.html'
})
export class DynamicFormFieldComponent {

  @Input() field:FormBase<any>;
  @Input() form:FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
}
