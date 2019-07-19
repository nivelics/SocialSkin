import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { ObjectDataHtml } from '../../models/objectDataHtml/objectDataHtml';
import { ServiceDataEmiterModules } from '../../services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-intercalate-block',
  templateUrl: './intercalate-block.component.html',
  styleUrls: ['./intercalate-block.component.scss']
})
export class IntercalateBlockComponent implements OnInit {
  public objectArray: any = [];
  private events: Subscription;

  @Input()
  showButton: boolean;

  constructor(private serviceDataEmiterModules: ServiceDataEmiterModules) { }

  ngOnInit() {
    this.getDataHtmlCategories();
  }

  getDataHtmlCategories() {
    this.serviceDataEmiterModules.listen().subscribe(response => {
      this.objectArray = response.categories;
    });
  }


  ngOnDestroy() {
    if (this.events) {
      this.events.unsubscribe();
    }
  }

}
