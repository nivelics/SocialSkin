import { Component, OnInit, OnDestroy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ObjectDataHtml } from '../../models/objectDataHtml/objectDataHtml';
import { ServiceDataEmiterModules } from '../../services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-partners',
	templateUrl: './partners.component.html',
	styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

	private events: Subscription;
	public objectHtml: ObjectDataHtml = new ObjectDataHtml;

	partnersConfig = {
		"slidesToShow": 7,
		"slidesToScroll": 7,
		"dots": false,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	constructor(private serviceDataEmiterModules: ServiceDataEmiterModules) { }

	ngOnInit() {
		this.getDataHtmlPartners();
	}

	getDataHtmlPartners() {
		this.serviceDataEmiterModules.listen().subscribe(response => {
			this.objectHtml = response;
		});
	}

	ngOnDestroy() {
		if (this.events) {
			this.events.unsubscribe();
		}
	}
}
