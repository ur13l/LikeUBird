import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/services/auth.service';

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
		private authService : AuthService

	) { 
		this._page.actionBarHidden = true;
	}

	ngOnInit() {
		
	}
}