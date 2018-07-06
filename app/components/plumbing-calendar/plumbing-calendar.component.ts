import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/services/auth.service';
import { RadCalendar, CalendarEvent, CalendarEventsViewMode } from "nativescript-ui-calendar";
import { ServiceService } from '~/services/service.service';
import { Service } from '~/models/service';


@Component({
	moduleId: module.id,
	selector: 'plumbing-calendar',
	templateUrl: './plumbing-calendar.component.html',
	styleUrls: ['./plumbing-calendar.component.css']
})

export class PlumbingCalendarComponent implements OnInit {

	constructor(
		private _page : Page,
		private _router : RouterExtensions,
		private authService : AuthService,
		private serviceService : ServiceService

	) { 
		this._page.actionBarHidden = true;
	}

	ngOnInit() { }

	serviceDetail() {
		let service = new Service({
            "id": "1",
            "name": "Plomeria",
            "image": "~/assets/img/plomeria.jpg",
            "classname": "plomeria"
        });

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