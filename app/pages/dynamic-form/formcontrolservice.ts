import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { FormBase } from './formbase.ts';

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
