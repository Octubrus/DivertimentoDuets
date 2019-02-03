import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadMaterialsComponentV1 } from 'src/app/download-materials/volume1/download-v1.component';

@Component({
  selector: 'app-volume1',
  templateUrl: './volume1.component.html',
  styleUrls: ['./volume1.component.scss']
})
export class Volume1Component implements OnInit {

  @Input() price;
  @Input() forUk;
  @Input() forEurope;
  @Input() forUSAorCanada;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DownloadMaterialsComponentV1, {});
  }

}
