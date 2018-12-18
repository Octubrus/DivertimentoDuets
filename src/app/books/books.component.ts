import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  price: number;
  forUk: boolean;
  forEurope: boolean;
  forUSAorCanada: boolean;

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    const client = this.route.snapshot.data.data;
    this.forUk = client.country === 'GB';
    this.forEurope = client.continent_code === 'EU' && client.country !== 'GB';
    this.forUSAorCanada = client.country === 'US' || client.country === 'CA';

    if (this.forUk) {
      this.price = 18;
    } else if (this.forEurope) {
      this.price = 20;
    } else if (this.forUSAorCanada) {
      this.price = 22;
    } else {
      this.price = 23;
    }
  }

}
