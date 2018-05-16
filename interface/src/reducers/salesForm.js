import { combineReducers } from 'redux';
import order from './order';
import items from './items';
import contact from './contact';
import delivery from './delivery';
import * as actions from '../actions/actionTypes';
import * as itemsReducer from './items';

const category = (state = '', action) => {
  switch (action.type) {
    case actions.SALES_CATEGORY_CHANGE:
      return action.category;
    default:
      return state;
  }
};

export default combineReducers({
  order,
  contact,
  category,
  items,
  delivery
});

export const getAllItems = (state) => state.items;
export const getItemName = (state, id) => itemsReducer.getItemName(state.items, id);
export const getItemRate = (state, id) => itemsReducer.getItemRate(state.items, id);
export const getItemQty = (state, id) => itemsReducer.getItemQty(state.items, id);
