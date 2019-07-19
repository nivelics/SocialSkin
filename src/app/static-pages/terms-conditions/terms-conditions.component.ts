import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObjectDataHtml } from '../../shared/models/objectDataHtml/objectDataHtml';
import { ServiceDataEmiterModules } from '../../shared/services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  public termArrayData: any;
  public objectHtml: ObjectDataHtml = new ObjectDataHtml;
  private events: Subscription;

  constructor(private serviceDataEmiterModules: ServiceDataEmiterModules) { }

  ngOnInit() {
    this.getDataHtmlTerms();
  }

  getDataHtmlTerms() {
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
