import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent implements OnInit {

  cards:any[] = [

      { title:'Quem somos', bgImg:'Url(../../../assets/svg/card-1.svg)', bgColor:'#3B4583', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis, a, quod laborio'  },

      { title:'Vantagens de comprar conosco', bgImg:'Url(../../../assets/svg/card-2.svg)', bgColor:'#7B9A38', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis, a, quod laborio'  },

      { title:'Porque não consumir FastFashion?', bgImg:'Url(../../../assets/svg/card-3.svg)', bgColor:'#D44C3D', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis, a, quod laborio'  },

      { title:'Dúvidas? Fale conosco', bgImg:'Url(../../../assets/svg/card-4.svg)', bgColor:'#202020', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis, a, quod laborio'  },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
