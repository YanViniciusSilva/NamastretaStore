import { GlobalFunctionsService } from './../../../services/global-functions.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginVisible = false;

  constructor(
    public globalFunctionsService: GlobalFunctionsService
  ) { }

  ngOnInit(): void {
  }

  LoginIsVisible(){
    this.globalFunctionsService.setLoginIsVisible();
  }

  CartIsVisible(){
    this.globalFunctionsService.setCartIsVisible();
  }

}
