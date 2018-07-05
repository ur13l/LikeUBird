import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/services/auth.service';

@Component({
	moduleId: module.id,
	selector: 'cleaning-additional',
	templateUrl: './cleaning-additional.component.html',
	styleUrls: ['./cleaning-additional.component.css']
})

export class CleaningAdditionalComponent implements OnInit {

	public jobs : any [] = [
		{
			name: "Limpieza de baño",
			image: "~/assets/img/bathroom.png"
		},
		{
			name: "Limpieza de fachada",
			image: "~/assets/img/house.png"
		},
		{
			name: "Limpieza de platos",
			image: "~/assets/img/dishwasher.png"
		},
		{
			name: "Limpieza de pisos",
			image: "~/assets/img/floor.png"
		},
		
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