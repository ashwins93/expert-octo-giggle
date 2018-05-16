import { combineReducers } from 'redux';
import order, * as orderReducer from './order';
import items, * as itemsReducer from './items';
import contact, * as contactReducer from './contact';
import delivery, * as deliveryReducer from './delivery';
import options, * as optionsReducer from './options';
import * as actions from '../actions/actionTypes';


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
  delivery,
  options,
});

export const getAllItems = (state) => state.items;
export const getItemName = (state, id) => itemsReducer.getItemName(state.items, id);
export const getItemRate = (state, id) => itemsReducer.getItemRate(state.items, id);
export const getItemQty = (state, id) => itemsReducer.getItemQty(state.items, id);
export const getOrderDetail = (state, name) => orderReducer.getOrderDetail(state.order, name);
export const getDeliveryDetail = (state, name) => deliveryReducer.getDeliveryDetail(state.delivery, name);
export const getContactDetail = (state, name) => contactReducer.getContactDetail(state.contact, name);
export const getCategory = (state) => state.category;
export const getOptions = (state, type) => optionsReducer.getOptions(state.options, type);
export const getSalesHead = (state) => optionsReducer.getSalesHead(state.options);