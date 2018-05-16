import * as actions from './actionTypes';
import * as api from '../api';

export const addItem = () => ({
  type: actions.SALES_ADD_ITEM
});

export const removeItem = id => ({
  type: actions.SALES_REMOVE_ITEM,
  id
});

export const itemQtyChange = (id, quantity) => ({
  type: actions.SALES_ITEM_QTY_CHANGE,
  id,
  quantity
});

export const itemRateChange = (id, rate) => ({
  type: actions.SALES_ITEM_RATE_CHANGE,
  id,
  rate
});

export const itemNameChange = (id, name) => ({
  type: actions.SALES_ITEM_NAME_CHANGE,
  id,
  name
});

export const orderDetailChange = (name, value) => ({
  type: actions.SALES_ORDER_DETAIL_CHANGE,
  name,
  value
});

export const contactDetailChange = (name, value) => ({
  type: actions.SALES_CONTACT_DETAIL_CHANGE,
  name,
  value
});

export const deliveryDetailChange = (name, value) => ({
  type: actions.SALES_DELIVERY_DETAIL_CHANGE,
  name,
  value
});

export const categoryChange = (category) => ({
  type: actions.SALES_CATEGORY_CHANGE,
  category
});

export const fetchOptions = (type, group) => (dispatch) => {
  api.fetchOptions(type, group).then(options => {
    dispatch({
      type: actions.SALES_FETCH_OPTIONS,
      options,
      optionsFor: type
    });
  });
  return Promise.resolve();
};

export const fetchSalesHead = (distributor) => (dispatch) => {
  api.fetchSalesHead(distributor).then(salesHead => {
    dispatch({
      type: actions.SALES_FETCH_HEAD,
      salesHead
    });
  });
  return Promise.resolve();
};