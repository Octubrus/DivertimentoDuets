import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadMaterialsComponent } from '../download-materials/download-materials.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DownloadMaterialsComponent, {});
  }

}
