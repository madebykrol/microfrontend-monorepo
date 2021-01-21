import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  amountInCart: number;

  constructor() { }

  ngOnInit(): void {
    this.amountInCart = 10;
  }

}
