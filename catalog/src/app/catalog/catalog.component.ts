import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(event: MouseEvent) {
    console.log(event);
  }
}
