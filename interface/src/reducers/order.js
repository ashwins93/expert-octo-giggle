import * as actions from '../actions/actionTypes';

const initialState = {
  orderReceivedOn: '',
  orderReceivedThrough: '',
  originalOrder: ''
}

const order = (state = initialState, action) => {
  if (action.type === actions.SALES_ORDER_DETAIL_CHANGE) {
    return { ...state, [action.name]: action.value };
  }
  return state;
};

export default order;