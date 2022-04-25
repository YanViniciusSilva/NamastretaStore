import { CarrouselBannerComponent } from './components/carrousel-banner/carrousel-banner.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';


const routes: Routes = [
  {path : '' , component: HomePageComponent},

  {path : 'Produtos',
    loadChildren: () =>
    import('./pages/products/products.module').then(
      m => m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
