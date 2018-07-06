import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/services/auth.service';
import { Service } from '~/models/service';
import { ServiceService } from '~/services/service.service';

@Component({
	moduleId: module.id,
	selector: 'cleaning-info',
	templateUrl: './cleaning-info.component.html',
	styleUrls: ['./cleaning-info.component.css']
})

export class CleaningInfoComponent implements OnInit {

	constructor(
		private _page : Page,
		private _router : RouterExtensions,
		private authService : AuthService,
		private serviceService : ServiceService

	) { 
		this._page.actionBarHidden = true;
	}

	ngOnInit() { }

}