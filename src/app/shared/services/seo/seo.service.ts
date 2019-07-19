import { Injectable, Inject, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Seo } from '../../models/shared/seo';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DOCUMENT, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  public apiUrl: string = environment.apiUrl;
  public urlImg: String = environment.url;
  private renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private dom, private router: Router, private activatedRoute: ActivatedRoute, private location: Location, private rendererFactory: RendererFactory2, private meta: Meta, private title: Title, private http: HttpClient) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  generateTags(config) {
    this.meta.updateTag({ property: 'autor', content: 'Social Skin' });
    this.meta.updateTag({ name: 'description', content: config.description });
    this.title.setTitle(config.title + ' | Social Skin');
    this.meta.updateTag({ property: 'og:type', content: "website" });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: environment.url + this.router.url });
    if (config.image != null) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    } else {
      this.meta.updateTag({ property: 'og:image', content: this.urlImg + '' });
    }
    this.meta.updateTag({ property: 'og:site_name', content: 'Social Skin' });
    this.meta.updateTag({ property: 'fb:admins', content: '' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ name: 'language', content: 'Spanish' });
    this.meta.updateTag({ name: 'geo.region', content: 'CO' });
    this.meta.updateTag({ name: 'og:locale:alternate', content: 'es_CO' });
    this.meta.updateTag({ name: 'geo.position', content: '4.570868;-74.297333' });
    this.meta.updateTag({ name: 'ICBM', content: '4.570868, -74.297333' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Colombia' });
    this.createCanonicalURL();
  }

  createCanonicalURL() {
    let url = '';
    const canonical = this.dom.querySelector("link[rel='canonical']");
    const head = this.dom.head;
    if (canonical !== undefined && canonical !== null) {
      this.renderer.removeAttribute(canonical, 'href');
      this.renderer.setAttribute(canonical, 'href', environment.url + this.router.url);
    } else {
      let link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      link.setAttribute('href', environment.url + this.router.url);
    }
  }
}
