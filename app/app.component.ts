import {Component} from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';

@Component({
	selector: 'my-app',
	template: 
	          `<div>
	              <h2> 
	                 My Angular2 App
	              </h2>
	              <my-home></my-home>
	              <about></about>
	           </div>`
})

export class AppComponent {
	
}