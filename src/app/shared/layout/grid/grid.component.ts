import { Component, OnInit, OnDestroy } from '@angular/core';
import * as objectFitImages from 'object-fit-images';
import { ServiceDataEmiterModules } from '../../services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { ObjectDataHtml } from '../../models/objectDataHtml/objectDataHtml';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public objectArrayCategories = new Array();
  public objectHtml: ObjectDataHtml = new ObjectDataHtml;
  public matrixObjectHtml = new Array();
  private events: Subscription;

  constructor(private serviceDataEmiterModules: ServiceDataEmiterModules) { }

  ngOnInit() {
    objectFitImages(".img-contain");
    this.getDataHtmlModuleCategories();
  }

  getDataHtmlModuleCategories() {
    this.serviceDataEmiterModules.listen().subscribe(response => {
      this.objectHtml = response;
      this.matrixObjectHtml = this.groupMatrixObjectForRowHtml(this.objectHtml);
    });
  }

  groupMatrixObjectForRowHtml(objectTransformHtml: ObjectDataHtml): any {
    if (objectTransformHtml.categories !== undefined && objectTransformHtml.categories.data !== undefined) {
      for (let index = 0; index < objectTransformHtml.categories.data.length; index++) {
        const element = objectTransformHtml.categories.data[index];
        if (this.objectHtml.categories.data.length > 3) {
          if (index <= 3) {
            this.objectArrayCategories.push(element);
            if (index === (this.objectHtml.categories.data.length - 1) || index == 3) {
              this.matrixObjectHtml.push(this.objectArrayCategories);
              this.objectArrayCategories = [];
            }
          } else if (index <= 7) {
            this.objectArrayCategories.push(element);
            if (index === (this.objectHtml.categories.data.length - 1) || index === 7) {
              this.matrixObjectHtml.push(this.objectArrayCategories);
              this.objectArrayCategories = [];
            }
          } else if (index <= 11) {
            this.objectArrayCategories.push(element);
            if (index === (this.objectHtml.categories.data.length - 1) || index === 11) {
              this.matrixObjectHtml.push(this.objectArrayCategories);
              this.objectArrayCategories = [];
            }
          } else if (index <= 15) {
            this.objectArrayCategories.push(element);
            if (index === (this.objectHtml.categories.data.length - 1) || index === 15) {
              this.matrixObjectHtml.push(this.objectArrayCategories);
              this.objectArrayCategories = [];
            }
          }
        } else {
          this.objectArrayCategories.push(element);
          if (index === (this.objectHtml.categories.data.length - 1)) {
            this.matrixObjectHtml.push(this.objectArrayCategories);
            this.objectArrayCategories = [];
          }
        }
      }
    }
    return this.matrixObjectHtml;
  }

  ngOnDestroy() {
    if (this.events) {
      this.events.unsubscribe();
    }
  }
}
