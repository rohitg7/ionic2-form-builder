import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-form';
import { UserService }  from './user.service';


/*
  Generated class for the SamplePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sample/sample.html',
  directives: [DynamicFormComponent],
  providers:  [UserService]
})
export class SamplePage {

  sampleForm: FormGroup;
  fields:any[];

  constructor(private navCtrl: NavController, private formbuilder: FormBuilder, private service: UserService) {
      this.fields = service.getFields({});
      this.sampleForm = formbuilder.group({
      	'firstname' : '',
      	'lastname' : '',
      	'gender' : 1
      })
  }

  onSubmit(event) {
  	console.log('Sample form data is ', this.sampleForm.value);
  }

}
