import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  expandedHeaderHeight = '100px';
  collapsedHeaderHeight = '70px';

  constructor() { }

  ngOnInit() {
  }

}
