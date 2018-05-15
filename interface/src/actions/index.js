import * as actions from './actionTypes';

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
