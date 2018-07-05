import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/services/auth.service';

@Component({
	moduleId: module.id,
	selector: 'cleaning-selection',
	templateUrl: './cleaning-selection.component.html',
	styleUrls: ['./cleaning-selection.component.css']
})

export class CleaningSelectionComponent implements OnInit {
	public jobs : any [] = [
		{
			name: "Casa",
			image: "~/assets/img/house.png"
		},
		{
			name: "Jardín",
			image: "~/assets/img/garden.png"
		},
		{
			name: "Oficina",
			image: "~/assets/img/office.png"
		},
		{
			name: "Taller",
			image: "~/assets/img/warehouse.png"
		},
		{
			name: "Auto",
			image: "~/assets/img/car.png"
		},
		{
			name: "Mascota",
			image: "~/assets/img/pet.png"
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