import {Component} from '@angular/core';



@Component({
	selector: 'sample',
	template :  `
	              <div class = "container" *ngIf="showHeader">
                  <h4>This is my sample page.</h4><br>
                  He is {{name | uppercase}}<br>
                  <img [src] = 'imageUrl' width=300px height=300px/> <br><br>
                  <button class="btn btn-primary" (click)="runMe()">Click Me!</button>
                  <br><br>
                  <input type="text" [(ngModel)]= "realName" (keyup.enter) = "getValues($event)"/><br><br>
                  {{realName}}
                  <br><br>
                  <ul *ngFor="let item of items">
                    <li>{{item | uppercase}}</li>
                  </ul><br>
                  Dispaly Price : {{price | currency : 'USD' : true}}
                  </div>                 
            	`
})

// we can use "bind-src or [src] in component class"

export class SampleComponent {
	private name : string;
	private imageUrl: string;
	private realName : string;
	private showHeader : boolean;
	private items : string[];
	private price: number;

	constructor() {
		this.name = "aravind";
		this.imageUrl = "./app/components/images/Romantic-couple-rain-hd-wallpapers.jpg";
		this.realName = "Aravind";
		this.showHeader = true;
		this.items = ["redmi", "motorola", "sumsung", "apple", "nokia","coolpad"];
		this.price = 1500;
	}
	runMe() {
		console.log("hey wait!!! did you click me");
	}

	getValues(aravind : any) {
		console.log(aravind.target.value)
	}
}