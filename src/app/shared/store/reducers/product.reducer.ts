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

    case ProductActionsTypes.SumItems: {
      debugger
      return {
        ...state,
        amount: state.saveItems.reduce((a, b) => +a + +b.price, 0)
      };
    }
    default:
      return state;
  }
}
