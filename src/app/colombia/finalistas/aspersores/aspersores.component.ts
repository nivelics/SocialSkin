import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogVideoComponent } from '../../../shared/layout/dialog-video/dialog-video.component';

@Component({
  selector: 'app-aspersores',
  templateUrl: './aspersores.component.html',
  styleUrls: ['./aspersores.component.scss']
})
export class AspersoresComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer, public dialog: MatDialog) { }

  ngOnInit() {
  }

  video = "https://www.youtube.com/embed/GfBcXPKDp94";

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogVideoComponent, {
      width: '620px'
    });

    dialogRef.componentInstance.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
  }

}
