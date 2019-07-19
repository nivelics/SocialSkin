import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObjectDataHtml } from '../../shared/models/objectDataHtml/objectDataHtml';
import { ServiceDataEmiterModules } from '../../shared/services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  public objectHtml: ObjectDataHtml = new ObjectDataHtml;
  private events: Subscription;


  constructor(private serviceDataEmiterModules: ServiceDataEmiterModules) { }

  ngOnInit() {
    this.getDataHtmlPrivacy();
  }

  getDataHtmlPrivacy() {
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
