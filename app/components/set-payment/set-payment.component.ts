import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/services/auth.service';
import { Service } from '~/models/service';
import { ServiceService } from '~/services/service.service';

@Component({
	moduleId: module.id,
	selector: 'set-payment',
	templateUrl: './set-payment.component.html',
	styleUrls: ['./set-payment.component.css']
})

export class SetPaymentComponent implements OnInit {

	public cards : any [] = [
		{
			number: "5579 0700 6678 0029",
			image: "~/assets/img/mastercard.png"
		},
		{
			number: "4111 1332 2332 1990",
			image: "~/assets/img/visa.png"
		},
		{
			number: "3423 2991 7221 5153",
			image: "~/assets/img/amex.png"
		},
		{
			number: "Agregar tarjeta",
			image: "~/assets/img/add-plus-button.png"
		}
	]

	constructor(
		private _page : Page,
		private _router : RouterExtensions,
		private authService : AuthService,
		private serviceService : ServiceService

	) { 
		this._page.actionBarHidden = true;
		
	}

	ngOnInit() { }

	select(card){
		this.cards.forEach(c => c.selected = false);
		card.selected = !card.selected;
	}

	serviceDetail() {
		/*
		     "id": "1",
            "name": "Plomeria",
            "image": "~/assets/img/plomeria.jpg",
			"classname": "plomeria",
			"category": "plumber"
		});*/
		
		let service = this.serviceService.getService();

		this.serviceService.selectService(service)
			.then(
				response => {
						this._router.navigate(['/service-detail'], { clearHistory: false })
				},
				error => {
					console.log(error);
				}
			)
	}
}