import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrouselBannerComponent } from './components/carrousel-banner/carrousel-banner.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { BooleanInput } from '@angular/cdk/coercion';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';
import { LoginFlutterComponent } from './components/login-flutter/login-flutter.component';
import { CartComponent } from './components/cart/cart.component'


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CarrouselBannerComponent,
    InfoCardsComponent,
    LoginFlutterComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    MdbCarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
