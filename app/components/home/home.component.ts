import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { AuthService } from '~/services/auth.service'
import { RouterExtensions } from 'nativescript-angular/router';
import { TnsSideDrawer } from 'nativescript-sidedrawer'
import { ServiceService } from '~/services/service.service';
import { Service } from '~/models/service';

@Component({
    moduleId: module.id,
	selector: 'home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
	public services : Service[] = [];


	constructor(
		private _page : Page,
		private _router : RouterExtensions,
		private authService : AuthService,
		private serviceService : ServiceService

	) { 
		this._page.actionBarHidden = true;
		
	}

    ngOnInit() {
		this.serviceService.index()
			.subscribe(
				services => {
					this.services = services;
				},
				error => {
				}
			)
	}

	logout() {
		this.authService.logout()
			.then(
				succes => {
					this._router.navigate(['/'], { clearHistory: true })
				},
				error => {
				}
			)
	}

	serviceDetail(service : Service) {
		this.serviceService.selectService(service)
			.then(
				response => {
					if(service.name == "Plomeria") {
						this._router.navigate(['/plumber-selection'], { clearHistory: false })
					}
					else if (service.name == "Cerrajería") {
						this._router.navigate(['/locksmith-selection'])
					}
					else {
						this._router.navigate(['/cleaning-selection'], { clearHistory: false })						
					}
				}
			)
	}


	marketPlace(n : number) {
		this._router.navigate(['/market-place/' + n]);
	}
}