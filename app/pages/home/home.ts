import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-form';
import { UserService }  from './user.service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [DynamicFormComponent],
  providers:  [UserService]
})
export class HomePage {

	sampleForm: FormGroup;
	fields:any[];

	constructor(public navCtrl: NavController, private formbuilder: FormBuilder, private service: UserService) {
	  this.fields = service.getFields({});
	}

	onSubmit(event) {
	  	console.log('Sample form data is ', this.sampleForm.value);
	  }

	save(event) {
		console.log(event);
		}
}
