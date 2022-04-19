import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';


interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'carrousel-banner-component',
  templateUrl: './carrousel-banner.component.html',
  styleUrls: ['./carrousel-banner.component.scss'],
  // template: `
  //   <swiper
  //     [config]="config"
  //     (swiper)="onSwiper($event)"
  //     (slideChange)="onSlideChange()"
  //   >
  //     <ng-template swiperSlide>Slide 1</ng-template>
  //     <ng-template swiperSlide>Slide 2</ng-template>
  //     <ng-template swiperSlide>Slide 3</ng-template>
  //   </swiper> `,
})

export class CarrouselBannerComponent implements OnInit {

  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;

  Slides = [
    {image: '../../../assets/svg/img-teste.svg'},
    {image: '../../../assets/svg/logo.svg'},
    {image: '../../../assets/svg/img-teste.svg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectImage(index : number) : void {
    this.selectedIndex = index;
  }

}


