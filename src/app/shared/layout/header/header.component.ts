import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ServiceDataEmiterModules } from '../../services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { ObjectDataHtml } from '../../models/objectDataHtml/objectDataHtml';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	public hasBg: boolean;
	public status: boolean = false;
	public open: boolean = false;
	public menu: boolean;
	public objectHtml: ObjectDataHtml;
	public objectNavigationUrl: any;
	private events: Subscription;
	public parmsModuleSlug: string;

	constructor(private route: ActivatedRoute, private router: Router, private serviceDataEmiterModules: ServiceDataEmiterModules) {
		router.events.forEach((event) => {
			if (event instanceof NavigationEnd) {
				this.parmsModuleSlug = event.url;
				this.ngOnInit();
			}
		});
	}

	ngOnInit() {
		this.getDataHtmlNavigation();
	}

	getDataHtmlNavigation() {
		this.serviceDataEmiterModules.listen().subscribe(response => {
			this.objectHtml = response;
			if (this.objectHtml !== undefined) {
				this.hasBg = this.objectHtml.typeColorHeader;
				this.menu = this.objectHtml.withMenu;
				this.objectNavigationUrl = this.objectHtml.navigations;
			} else {
				this.hasBg = false;
				this.menu = true;
				this.objectNavigationUrl = [];
			}
		});
	}


	clickEvent() {
		this.status = !this.status;
	}

	menuMobile() {
		this.open = !this.open;
	}

	@HostListener('window:scroll', ['$event'])
	onWindowScroll(e) {
		if (window.pageYOffset > 96) {
			let element = document.getElementById('header');
			element.classList.add('bg');
		} else {
			let element = document.getElementById('header');
			element.classList.remove('bg');
		}
	}

	ngOnDestroy() {
		if (this.events) {
			this.events.unsubscribe();
		}
	}
}
