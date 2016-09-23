import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';

////////////////////////////////////////////////////////////////////////

export class FormBase<T>{
  value:T;
  key:string;
  label:string;
  required:boolean;
  readonly:boolean;
  disabled:boolean; 
  order:number;
  controlType:string;
  placeholder:string;
  constructor(options:{
      value?:T,
      key?:string,
      label?:string,
      required?:boolean,
      readonly?:boolean,
      disabled?:boolean,
      order?:number,
      controlType?:string,
      placeholder?:string
    } = {}){
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.readonly = !!options.readonly;
    this.disabled = !!options.disabled;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
  }
}

////////////////////////////////////////////////////////////////////////


export class TextboxField extends FormBase<string>{
  controlType = 'textbox';
  type:string;

  constructor(options:{} = {}){
    super(options);
    this.type = options['type'] || '';
  }
}

////////////////////////////////////////////////////////////////////////


export class DropdownField extends FormBase<string>{
  controlType = 'dropdown';
  options:{key:string, value:string}[] = [];

  constructor(options:{} = {}){
    super(options);
    this.options = options['options'] || [];
  }
}

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
  selector:'df-field',
  templateUrl: 'build/pages/dynamic-form/df-field.html'
})
export class DynamicFormFieldComponent {
  @Input() field:FormBase<any>;
  @Input() form:ControlGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
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


