import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  public products = [
    {
      id:'1',
      title:'Camisa Preta masculina',
      price:'100,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'2',
      title:'Camisa branca feminina',
      price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'3',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'4',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'5',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'6',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'7',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'8',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'9',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'10',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'11',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },
    {
      id:'12',title:'Camisa branca feminina', price:'90,00',
      imgUrl:'https://s.alicdn.com/@sc01/kf/HTB1z_IseSSD3KVjSZFKq6z10VXa3.jpg'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
