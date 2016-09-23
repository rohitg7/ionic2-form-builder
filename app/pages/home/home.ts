import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SamplePage } from '../sample/sample';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

	trigger ($event)
	{
		this.navCtrl.push(SamplePage);
		console.log('button pressed');
	}
}
