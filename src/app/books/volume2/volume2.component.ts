import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadMaterialsComponentV2 } from 'src/app/download-materials/volume2/download-v2.component';

@Component({
  selector: 'app-volume2',
  templateUrl: './volume2.component.html',
  styleUrls: ['./volume2.component.scss']
})
export class Volume2Component implements OnInit {

  @Input() price;
  @Input() forUk;
  @Input() forEurope;
  @Input() forUSAorCanada;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DownloadMaterialsComponentV2, {});
  }

}
