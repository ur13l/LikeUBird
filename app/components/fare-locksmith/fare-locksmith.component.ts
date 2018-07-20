import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/services/auth.service';

@Component({
	moduleId: module.id,
	selector: 'fare-locksmith',
	templateUrl: './fare-locksmith.component.html',
	styleUrls: ['./fare-locksmith.component.css']
})

export class FareLocksmithComponent implements OnInit {

	constructor(
		private _page : Page,
		private _router : RouterExtensions,
		private authService : AuthService

	) { 
		this._page.actionBarHidden = true;
	}

	ngOnInit() { }
}