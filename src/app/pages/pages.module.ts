import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { PageRoutingModule } from './page-routing.module';
import { BasketComponent } from './basket/basket.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductEffects } from './../shared/store/effects/product.effect';


@NgModule({
  declarations: [BasketComponent, ShoppingComponent],
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule,

    EffectsModule.forRoot([ProductEffects])
  ],
  exports: [BasketComponent, ShoppingComponent],
})
export class PagesModule { }
