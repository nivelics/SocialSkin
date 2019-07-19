import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MicroformatsService {
  constructor(private sanitizer: DomSanitizer) {

  }

  organization(objectOrganization: any): any {
    let objectJson = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'social-skin.com',
      'url': 'https://social-skin.com',
      'logo':
        'https://social-skin.com/images/logo-social-skin.png',
      'email': '',
      'telephone': '',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'COL',
        'postalCode': '110931',
        'streetAddress': 'Av Dorado # 68b - 31'
      },
      'addressLocality': 'Bogotá',
      'sameAs':
        [
          'https://www.facebook.com/social.skin.comunidad',
          'https://www.instagram.com/social_skin/',
          'https://twitter.com/Social_Skin'
        ]
    }
    return this.getSafeHTML(objectJson);
  }

  breadcrumbList(objectBreadcrumList: any): any {
    let objectJson = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'item': {
            '@id': 'https://social-skin.com/co',
            'name': 'Inicio'
          },
          'position': 1
        },
        {
          '@type': 'ListItem',
          'item': {
            '@id': 'https://social-skin.com/el-premio',
            'name': 'El Premio'
          },
          'position': 2
        }
      ]
    }
    return this.getSafeHTML(objectJson);
  }


  webSite(objectWebSite: any): any {
    let objectJson = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'social-skin.com',
      'url': 'https://social-skin.com'
    }
    return this.getSafeHTML(objectJson);
  }

  getSafeHTML(value): any {
    const json = value ? JSON.stringify(value, null, 2) : '';
    const html = `<script type='application/ld+json'> ${json} </script>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
