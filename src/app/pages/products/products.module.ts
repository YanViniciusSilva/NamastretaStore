import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsGridComponent } from 'src/app/components/products-grid/products-grid.component';
import { ProductsFilterComponent } from 'src/app/components/products-filter/products-filter.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductsGridComponent,
    ProductsFilterComponent,
    ProductsPageComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
