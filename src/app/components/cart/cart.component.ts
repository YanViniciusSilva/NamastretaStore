import { Component, Input, MissingTranslationStrategy, OnInit } from '@angular/core';
import { GlobalFunctionsService } from 'src/services/global-functions.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartClass = 'slideInRight';
  divCart = document.querySelector(".cart");

  constructor(
    public globalFunctionsService: GlobalFunctionsService,
  ) { }

  ngOnInit(): void {}

  closeModal(){
    this.globalFunctionsService.setCartIsVisible();
    // this.cartClass = 'slideOutRight'
  };




}
