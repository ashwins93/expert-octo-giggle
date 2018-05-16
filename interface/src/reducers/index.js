import { combineReducers } from 'redux';
import salesForm, * as sales from './salesForm';

export default combineReducers({
  salesForm
});

export const getAllItems = state => sales.getAllItems(state.salesForm);
export const getItemName = (state, id) =>
  sales.getItemName(state.salesForm, id);
export const getItemRate = (state, id) =>
  sales.getItemRate(state.salesForm, id);
export const getItemQty = (state, id) => sales.getItemQty(state.salesForm, id);
export const getOrderDetail = (state, name) =>
  sales.getOrderDetail(state.salesForm, name);
export const getDeliveryDetail = (state, name) =>
  sales.getDeliveryDetail(state.salesForm, name);
export const getContactDetail = (state, name) =>
  sales.getContactDetail(state.salesForm, name);
export const getCategory = state => sales.getCategory(state.salesForm);
export const getOptions = (state, type) =>
  sales.getOptions(state.salesForm, type);
export const getSalesHead = state => sales.getSalesHead(state.salesForm);
export const getSalesFormData = state => state.salesForm;
