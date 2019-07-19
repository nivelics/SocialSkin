import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogVideoComponent } from '../../../shared/layout/dialog-video/dialog-video.component';

@Component({
  selector: 'app-comproagro',
  templateUrl: './comproagro.component.html',
  styleUrls: ['./comproagro.component.scss']
})
export class ComproagroComponent implements OnInit {
	
  constructor(private sanitizer:DomSanitizer, public dialog: MatDialog) { }

  ngOnInit() {
  }

  video = "https://www.youtube.com/embed/FP9NRDMvlPs";

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogVideoComponent, {
      width: '620px',
      id: "no-bg"
    });

    dialogRef.componentInstance.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
  }

}
