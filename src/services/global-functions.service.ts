import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class GlobalFunctionsService {

  cartVisible = false;
  loginVisible = false;


  constructor() { }

  public setCartIsVisible(){
    if(this.cartVisible == false){
      this.cartVisible = true;
    }else{
      this.cartVisible = false;
    }
  }

  public setLoginIsVisible(){
      if(this.loginVisible == true){
        this.loginVisible = false;
      }else{
        this.loginVisible = true;
      }
  }
}

