import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceDataEmiterModules } from '../../services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { ObjectDataHtml } from '../../models/objectDataHtml/objectDataHtml';
import { DialogVideoComponent } from '../dialog-video/dialog-video.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public objectHtml: ObjectDataHtml = new ObjectDataHtml;
  private events: Subscription;

  @Input() video: boolean;

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  constructor(private serviceDataEmiterModules: ServiceDataEmiterModules, public dialog: MatDialog) { }

  ngOnInit() {
    this.serviceDataEmiterModules.listen().subscribe(response => {
      this.objectHtml = response;
    });
  }

  ngOnDestroy() {
    if (this.events) {
      this.events.unsubscribe();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogVideoComponent, {
      width: '620px',
    });
  }
}
