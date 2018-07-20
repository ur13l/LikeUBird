import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/services/auth.service';
import { Service } from '~/models/service';
import { ServiceService } from '~/services/service.service';

@Component({
	moduleId: module.id,
	selector: 'cleaning-house-size',
	templateUrl: './cleaning-house-size.component.html',
	styleUrls: ['./cleaning-house-size.component.css']
})

export class CleaningHouseSizeComponent implements OnInit {
	public size : number = 100;
	
	constructor(
		private _page : Page,
		private _router : RouterExtensions,
		private authService : AuthService,
		private serviceService : ServiceService

	) { 
		this._page.actionBarHidden = true;
	}

	ngOnInit() {
		
	}

	serviceDetail() {
		let service = new Service({
            "id": "5",
            "name": "Limpieza",
            "image": "~/assets/img/limpieza.jpg",
			"classname": "limpieza",
			"category": "cleaning"
        });

		this.serviceService.selectService(service)
			.then(
				response => {
						this._router.navigate(['/service-detail'])
				}
			)
	}
}