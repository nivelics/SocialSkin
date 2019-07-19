import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceDataEmiterModules } from '../shared/services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { ObjectDataHtml } from '../shared/models/objectDataHtml/objectDataHtml';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pre-home',
  templateUrl: './pre-home.component.html',
  styleUrls: ['./pre-home.component.scss']
})
export class PreHomeComponent implements OnInit {

  public objectHtml: ObjectDataHtml = new ObjectDataHtml;
  private events: Subscription;

  constructor(private serviceDataEmiterModules: ServiceDataEmiterModules) { }

  ngOnInit() {
    this.getDataHtmlContestPreviousAndContestCurrents();
  }

  getDataHtmlContestPreviousAndContestCurrents() {
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
