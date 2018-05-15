import { combineReducers } from 'redux';
import order from './order';
import items from './items';
import contact from './contact';
import delivery from './delivery';
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
  delivery
});
