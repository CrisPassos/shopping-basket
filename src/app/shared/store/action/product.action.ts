import { Action } from '@ngrx/store';
import { IProduct } from './../../models/product';

export enum ProductActionsTypes {
  GetProducts = '[Product] Get Products',
  GetProductsSuccess = '[Product] Keep All Produts',
  AddItem = '[Add Item] Add Produts',
  RemoveItem = '[Remove Item] Remove Produts',
  SumItems = '[Sum] Amount Princes',
  Error = '[Product Error] Any Kind of Error',
}

export class GetProducts implements Action {
  public readonly type = ProductActionsTypes.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = ProductActionsTypes.GetProductsSuccess;
  constructor(public payload: IProduct[]) { }
}

export class AddItem implements Action {
  public readonly type = ProductActionsTypes.AddItem;
  constructor(public payload: IProduct) { }
}

export class RemoveItem implements Action {
  public readonly type = ProductActionsTypes.RemoveItem;
  constructor(public payload: IProduct) { }
}

export class SumItems implements Action {
  public readonly type = ProductActionsTypes.SumItems;
}

export class Error implements Action {
  public readonly type = ProductActionsTypes.Error;
}

export type ProductActions = GetProducts | GetProductsSuccess | AddItem | RemoveItem | Error | SumItems;
