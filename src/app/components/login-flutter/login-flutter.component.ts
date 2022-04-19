import { Component, OnInit } from '@angular/core';
import { GlobalFunctionsService } from 'src/services/global-functions.service';

@Component({
  selector: 'login-flutter',
  templateUrl: './login-flutter.component.html',
  styleUrls: ['./login-flutter.component.scss']
})
export class LoginFlutterComponent implements OnInit {

  constructor(
    public globalFunctionsService: GlobalFunctionsService,
  ) { }

  ngOnInit(): void {
  }

}
