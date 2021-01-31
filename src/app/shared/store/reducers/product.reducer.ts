import { initialProductState } from './../states/product.state';
import { ProductActions, ProductActionsTypes } from './../action/product.action';

export const productReducer = (
  state = initialProductState,
  action: ProductActions,
) => {
  switch (action.type) {
    case ProductActionsTypes.GetProductsSuccess: {
      return {
        ...state,
        response: action.payload
      };
    }
    case ProductActionsTypes.AddItem: {
      return {
        ...state,
        saveItems: [...state.saveItems, action.payload],
      };
    }
    default:
      return state;
  }
}



// const productReducer = createReducer(
//   initialState,
//   on(loadProducts, state => ({ ...state })),
//   on(dataProduct, state => ({ ...state, response: state.response })),
//   on(addItem, state => ({ ...state, saveItems: [...state.saveItems] })),
//   on(removeItem, state => ({ ...state, response: state.response })),
//   on(errorProduct, state => ({ ...state })),
// );

// export function reducer(state: State | undefined, action: Action) {
//   return productReducer(state, action);
// }
