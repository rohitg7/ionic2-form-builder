

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

    this.value       = options.value;
    this.key         = options.key || '';
    this.label       = options.label || '';
    this.required    = !!options.required;
    this.readonly    = !!options.readonly;
    this.disabled    = !!options.disabled;
    this.order       = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
  }
}


export class TextboxField extends FormBase<string> {
  controlType = 'textbox';
  type:string;

  constructor(options:{} = {}){
    super(options);
    this.type = options['type'] || '';
  }
}


export class DropdownField extends FormBase<string> {

  controlType = 'dropdown';
  options:{key:string, value:string}[] = [];

  constructor(options:{} = {}){
    super(options);
    this.options = options['options'] || [];
  }
}
