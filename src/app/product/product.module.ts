import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './container/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, ProductDetailComponent]
})
export class ProductModule { }
