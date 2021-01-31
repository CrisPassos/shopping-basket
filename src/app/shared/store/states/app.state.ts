import { IProductState, initialProductState } from './product.state';

export interface IAppState {
  products: IProductState
}

export const initialAppState: IAppState = {
  products: initialProductState
}

export function getInitialState(): IAppState {
  return initialAppState;
}
