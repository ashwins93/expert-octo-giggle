import * as actions from '../actions/actionTypes';

const initialState = {
  orderReceivedOn: '',
  orderReceivedThrough: '',
  originalOrder: ''
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case actions.SALES_ORDER_DETAIL_CHANGE:
      return { ...state, [action.name]: action.value }
    case actions.CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export default order;

export const getOrderDetail = (state, name) => state[name];