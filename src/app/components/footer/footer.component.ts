import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  items: any[] =  [
    {
      Title: 'Políticas',
      Options: [
      { option :'Politica de Privacidade'},
      { option :'Politica de Devolução' }
      ]
    },
    {
      Title: 'Redes Sociais',
      Options: [
        { option : 'Instagram'},
        { option : 'Facebook' }
      ]
    },
    {
      Title: 'Entre em contato',
      Options: [
        { option : 'namastreta@gmail.com'},
        { option : '(99) 9 9999-9999' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // footerContent(){
  //   for(this.items){

  //   }
  // }

}
