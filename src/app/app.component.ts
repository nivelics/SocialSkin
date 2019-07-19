import { WINDOW } from '@ng-toolkit/universal';
import { Meta } from '@angular/platform-browser';
import { Component, Inject, OnInit, Renderer2, HostListener, PLATFORM_ID } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { MicroformatsService } from './shared/services/microformats/microformats.service';
import { DOCUMENT } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { SeoService } from './shared/services/seo/seo.service';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

const PEOPLE_KEY = makeStateKey('doctor_aki');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public jsonLD: SafeHtml;
  public jsonLDWebSite: SafeHtml;
  public gtm: SafeHtml;
  constructor(@Inject(PLATFORM_ID) protected platformId: Object, private router: Router, private state: TransferState, private meta: Meta, @Inject(DOCUMENT) private document: any, private microformatsService: MicroformatsService, @Inject(WINDOW) private window: Window, private renderer: Renderer2, public seoService: SeoService) {

  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    switch (environment.environment) {
      case "develop":
        this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
        this.generateGTM('', 'script', true);
        this.generateGTM('', 'noscript', false);
        break;
      case "staging":
        this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
        this.generateGTM('', 'script', true);
        this.generateGTM('', 'noscript', false);
        break;
      case "production":
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.generateGTM('', 'script', true);
        this.generateGTM('', 'noscript', false);
        break;
    }
  }

  generateScript(urlScript: string) {
    const script = this.document.createElement('script');
    script.setAttribute('async', 'async');
    script.src = urlScript;
    this.document.head.appendChild(script);
  }

  generateGTM(code: string, type: string, head: boolean) {
    let tag = this.renderer.createElement(type);
    if (isPlatformBrowser(this.platformId)) {
      if (head) {
        let scriptHead = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-" + code + "');";
        tag.text = scriptHead;
        this.renderer.appendChild(this.document.head, tag);
      } else {
        let scriptBody = "<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-" + code + "'></iframe>";
        this.document.getElementById("gtm").innerHTML = scriptBody;
      }
    }
  }
}
