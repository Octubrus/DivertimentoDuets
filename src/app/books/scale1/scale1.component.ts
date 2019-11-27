import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadMaterialsComponentS1 } from 'src/app/download-materials/scale1/download-s1.component';

@Component({
  selector: 'app-scale1',
  templateUrl: './scale1.component.html',
  styleUrls: ['./scale1.component.scss']
})
export class Scale1Component implements OnInit {

  @Input() price;
  @Input() forUk;
  @Input() forEurope;
  @Input() forUSAorCanada;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DownloadMaterialsComponentS1, {});
  }

}
