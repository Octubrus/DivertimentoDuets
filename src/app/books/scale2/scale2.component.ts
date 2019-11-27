import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadMaterialsComponentS2 } from 'src/app/download-materials/scale2/download-s2.component';

@Component({
  selector: 'app-scale2',
  templateUrl: './scale2.component.html',
  styleUrls: ['./scale2.component.scss']
})
export class Scale2Component implements OnInit {

  @Input() price;
  @Input() forUk;
  @Input() forEurope;
  @Input() forUSAorCanada;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DownloadMaterialsComponentS2, {});
  }
}
