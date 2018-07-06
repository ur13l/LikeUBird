import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/services/auth.service';

@Component({
	moduleId: module.id,
	selector: 'plumber-selection',
	templateUrl: './plumber-selection.component.html',
	styleUrls: ['./plumber-selection.component.css']
})

export class PlumberSelectionComponent implements OnInit {

	public jobs : any [] = [
		{
			name: "Plomería general",
			image: "~/assets/img/pipe.png"
		},
		{
			name: "Reparación de fuga",
			image: "~/assets/img/leak.png"
		},
		{
			name: "Reparación de llaves",
			image: "~/assets/img/tap-3.png"
		},
		{
			name: "Reparación de Lavabo",
			image: "~/assets/img/bsink.png"
		},
		{
			name: "Destape de cañería",
			image: "~/assets/img/plu.png"
		},
		{
			name: "Goteras",
			image: "~/assets/img/drop.png"
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
		console.log(job.selected);
		job.selected = !job.selected;
	}
}