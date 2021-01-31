import { IProduct } from './../../models/product';

export interface IProductState {
  response: IProduct[];
  saveItems: IProduct[];
  amount: string;
}

export const initialProductState: IProductState = {
  response: null,
  saveItems: [],
  amount: null,
};

