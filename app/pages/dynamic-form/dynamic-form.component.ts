import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { FormBase } from './formbase.ts';
import { DynamicFormFieldComponent } from './df-field.component';


////////////////////////////////////////////////////////////////////////


@Injectable()
export class FormControlService {

	constructor(private fb:FormBuilder){ }

	toControlGroup(fields:FormBase<any>[] ) {
		let group = {};

		fields.forEach(field => {
			group[field.key] = field.required ? [field.value || '', Validators.required] : [field.value || ''];
		});
		return this.fb.group(group);
	}
}

////////////////////////////////////////////////////////////////////////

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


