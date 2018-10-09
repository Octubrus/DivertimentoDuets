import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadMaterialsComponent } from '../download-materials/download-materials.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DownloadMaterialsComponent, {});
  }

}
