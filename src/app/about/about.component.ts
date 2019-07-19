import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { AboutService } from '../shared/services-modules/about/about.service';
import { ArrayType } from '@angular/compiler';
import { ObjectDataHtml } from '../shared/models/objectDataHtml/objectDataHtml';
import { ServiceDataEmiterModules } from '../shared/services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	public objectHtml: ObjectDataHtml = new ObjectDataHtml();
	public requirementsArrayData = new Array();
	public matrixRequirementsArrayData = new Array();
	public stringSlug: string;


	carouselConfig = {
		"slidesToShow": 4,
		"slidesToScroll": 4,
		"dots": false,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
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

	constructor(private route: ActivatedRoute, private serviceDataEmiterModules: ServiceDataEmiterModules, public aboutService: AboutService) {
		this.stringSlug = this.route.snapshot.paramMap.get("slug");
	}

	ngOnInit() {
		this.findDataModuleAbout();
	}

	findDataModuleAbout() {
		this.aboutService.findObjectAboutHome(this.stringSlug + '/what').subscribe(response => {
			this.objectHtml = response['result'];
			this.matrixRequirementsArrayData = this.groupOrderRequirements(this.objectHtml);
			this.objectHtml.withMenu = true;
			this.serviceDataEmiterModules.sendDataMultiModuleHtml(this.objectHtml);
		}, (error: any) => {
			//integrar log de auditoria para los errores
			console.log(error);
		});
	}

	groupOrderRequirements(about: ObjectDataHtml): any {
		for (let index = 0; index < about.requirements.data.length; index++) {
			const element = about.requirements.data[index];
			if (about.requirements.data.length > 1) {
				if (index <= 1) {
					this.requirementsArrayData.push({ 'data': element, 'posicion': index + 1 });
					if (index === (about.requirements.data.length - 1) || index == 1) {
						this.matrixRequirementsArrayData.push(this.requirementsArrayData);
						this.requirementsArrayData = [];
					}
				} else if (index <= 3) {
					this.requirementsArrayData.push({ 'data': element, 'posicion': index + 1 });
					if (index === (about.requirements.data.length - 1) || index == 3) {
						this.matrixRequirementsArrayData.push(this.requirementsArrayData);
						this.requirementsArrayData = [];
					}
				}
			} else {
				this.requirementsArrayData.push({ 'data': element, 'posicion': index + 1 });
				if (index === (about.requirements.data.length - 1)) {
					this.matrixRequirementsArrayData.push(this.requirementsArrayData);
					this.requirementsArrayData = [];
				}
			}
		}
		return this.matrixRequirementsArrayData;
	}

}
