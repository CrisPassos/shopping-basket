import { createSelector } from '@ngrx/store';

import { IProductState } from './../states/product.state';
import { IAppState } from './../states/app.state';


const productState = (state: IAppState) => state.products;

export const selectProduct = createSelector(
  productState,
  (state: IProductState) => state.response
);

export const selectSelectedItens = createSelector(
  productState,
  (state: IProductState) => state.saveItems
);

export const selectAmount = createSelector(
  productState,
  (state: IProductState) => state.amount
);
