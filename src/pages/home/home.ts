import { Component }              from '@angular/core';
import { NavController }          from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { DynamicFormComponent }   from '../dynamic-form';
import { UserService }            from '../../providers/user-service';

// directives: [DynamicFormComponent],
// providers:  [UserService]


@Component({
  templateUrl: 'home.html'
})
export class HomePage {

	sampleForm: FormGroup;
	fields:any[];

	constructor(
     public navCtrl: NavController,
     public formbuilder: FormBuilder,
     public userService: UserService)
     {
       this.fields = userService.getFields({});
	   } 

	onSubmit(event) {
	  	console.log('Sample form data is ', this.sampleForm.value);
	}

	save(event) {
		console.log(event);
	}
}




// import { Component } from '@angular/core';
//
// import { NavController } from 'ionic-angular';
//
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
//
//   constructor(public navCtrl: NavController) {
//
//   }
//
// }
