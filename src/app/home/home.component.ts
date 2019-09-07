import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  forUk: boolean;
  forUSAorCanada: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const client = this.route.snapshot.data.data;
    this.forUk = client.country === 'GB';
    this.forUSAorCanada = client.country === 'US' || client.country === 'CA';
  }

}
