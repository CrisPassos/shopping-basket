import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { PageRoutingModule } from './page-routing.module';
import { CartComponent } from './cart/cart.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductEffects } from './../shared/store/effects/product.effect';


@NgModule({
  declarations: [CartComponent, ShoppingComponent],
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule,

    EffectsModule.forRoot([ProductEffects])
  ],
  exports: [CartComponent, ShoppingComponent],
})
export class PagesModule { }
