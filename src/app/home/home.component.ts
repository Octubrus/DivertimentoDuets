import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DownloadMaterialsSimpleLesson } from '../download-materials/simpleLesson/simpleLesson.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  forUk: boolean;
  forUSAorCanada: boolean;
  forEurope: boolean;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    const client = this.route.snapshot.data.data;
    this.forUk = client.country === 'GB';
    this.forUSAorCanada = client.country === 'US' || client.country === 'CA';
    this.forEurope = client.continent_code === 'EU' && client.country !== 'GB';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DownloadMaterialsSimpleLesson, {});
  }

}
