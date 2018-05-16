import * as actions from '../actions/actionTypes';

const initialState = [
  {
    id: 0,
    name: '',
    quantity: 0,
    rate: 0
  }
];

const items = (state = initialState, action) => {
  switch (action.type) {
    case actions.SALES_ADD_ITEM:
      return [
        ...state,
        {
          id: state.reduce((maxId, item) => Math.max(maxId, item.id), -1) + 1,
          name: '',
          quantity: 0,
          rate: 0
        }
      ];
    case actions.SALES_REMOVE_ITEM:
      return state.filter(item => action.id !== item.id);
    case actions.SALES_ITEM_QTY_CHANGE:
      return state.map(
        item =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    case actions.SALES_ITEM_RATE_CHANGE:
      return state.map(
        item => (item.id === action.id ? { ...item, rate: action.rate } : item)
      );
    case actions.SALES_ITEM_NAME_CHANGE:
      return state.map(
        item => (item.id === action.id ? { ...item, name: action.name } : item)
      );
    case actions.CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export default items;

export const getItemName = (state, id) =>
  state.find(item => item.id === id).name;
export const getItemQty = (state, id) =>
  state.find(item => item.id === id).quantity;
export const getItemRate = (state, id) =>
  state.find(item => item.id === id).rate;
