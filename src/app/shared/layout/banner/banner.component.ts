import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { BannerService } from '../../services-modules/banner/banner.service';
import { ObjectDataHtml } from '../../models/objectDataHtml/objectDataHtml';
import { ServiceDataEmiterModules } from '../../services/serviceDataEmiterModules/serviceDataEmiterModules.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input()
  big_banner: string;
  @Input()
  bg: string;
  @Input()
  showText: boolean;
  @Input()
  showButton: boolean;
  @Input()
  paramsTypeModuleIntegrate: string;
  @Input()
  titleBanner: string;
  @Input()
  imageBanner: string;
  @Input()
  textImageAltBanner: string;
  @Input()
  bgColorHeader: boolean;
  @Input()
  showMenu: boolean;

  public objectHtml: ObjectDataHtml = new ObjectDataHtml;
  public image: string;
  public title: string;

  constructor(private serviceDataEmiterModules: ServiceDataEmiterModules, private bannerServices: BannerService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.imageBanner === undefined && this.titleBanner === undefined
      && this.paramsTypeModuleIntegrate !== undefined) {
      this.getDataHtmlBannerComponents(this.paramsTypeModuleIntegrate);
    } else {
      this.image = this.imageBanner;
      this.title = this.titleBanner;
    }
  }

  getDataHtmlBannerComponents(typeModuleIntegrate: String) {
    this.bannerServices.findObjectBannerHome(typeModuleIntegrate).
      subscribe(response => {
        this.objectHtml = response['result'];
        this.objectHtml.typeColorHeader = this.bgColorHeader;
        this.objectHtml.withMenu = this.showMenu;
        this.image = this.objectHtml.banner.image;
        this.title = this.objectHtml.banner.title;
        if (this.objectHtml.color !== undefined && this.objectHtml.color !== null) {
          this.bg = this.objectHtml.color;
        }
        this.serviceDataEmiterModules.sendDataMultiModuleHtml(this.objectHtml);
      }, (error: any) => {
        //integrar log de auditoria para los errores
        console.log(error);
      });
  }

}
