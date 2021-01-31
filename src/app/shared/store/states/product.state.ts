import { IProduct } from './../../models/product';

export interface IProductState {
  response: IProduct[];
  saveItems: IProduct[];
}

export const initialProductState: IProductState = {
  response: null,
  saveItems: [],
};

