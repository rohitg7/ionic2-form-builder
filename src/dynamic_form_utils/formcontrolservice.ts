import { Injectable }              from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { FormBase }                from './formbase';

@Injectable()
export class FormControlService {

	constructor(public fb:FormBuilder){ }

	toControlGroup(fields:FormBase<any>[] ) {
		let group = {};

		fields.forEach(field => {
			group[field.key] = field.required ? [field.value || '', Validators.required] : [field.value || ''];
		});
		return this.fb.group(group);
	}
}
