import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogVideoComponent } from '../../../shared/layout/dialog-video/dialog-video.component';


@Component({
  selector: 'app-fenix',
  templateUrl: './fenix.component.html',
  styleUrls: ['./fenix.component.scss']
})
export class FenixComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer, public dialog: MatDialog) { }

  ngOnInit() {
  }

  video = "https://www.youtube.com/embed/MmAP6OkCGnk";

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogVideoComponent, {
      width: '620px'
    });

    dialogRef.componentInstance.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
  }

}
