import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ProductService } from '../../services/product.service';
import { ProductActionsTypes } from '../action/product.action';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActionsTypes.GetProducts),
      mergeMap(() => this.productService.getAllProducts()
        .pipe(
          map(products => ({ type: ProductActionsTypes.GetProductsSuccess, payload: products })),
          catchError(() => of({ type: ProductActionsTypes.Error }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }
}
