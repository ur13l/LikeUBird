import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { AuthService } from '~/services/auth.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'locksmith-selection',
	templateUrl: './locksmith-selection.component.html',
	styleUrls: ['./locksmith-selection.component.css']
})

export class LocksmithSelectionComponent implements OnInit {
	public jobs : any [] = [
		{
			name: "Tradicional",
			image: "~/assets/img/key1.png"
		},
		{
			name: "Automotriz",
			image: "~/assets/img/car.png"
		},
		{
			name: "Duplicados",
			image: "~/assets/img/duplicate.png"
		},
		{
			name: "Seguridad",
			image: "~/assets/img/safety.png"
		},
		{
			name: "Hogar",
			image: "~/assets/img/house.png"
		},
		{
			name: "Comercial",
			image: "~/assets/img/commercial.png"
		}
	]

	constructor(
		private _page : Page,
		private _router : RouterExtensions,
		private authService : AuthService
	) { 
		this._page.actionBarHidden = true;
	}

	ngOnInit() { }

	select(job){
		job.selected = !job.selected;
	}
}