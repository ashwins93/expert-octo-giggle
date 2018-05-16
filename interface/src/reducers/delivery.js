import * as actions from '../actions/actionTypes';

const initialState = {
  supply: '',
  invoiced: false,
  invoiceNo: '',
  dispatchDate: '',
  courier: '',
  podNo: '',
  deliveryDate: '',
  pendingPayments: '',
  remarks: ''
}

const delivery = (state = initialState, action) => {
  switch (action.type) {
    case actions.SALES_DELIVERY_DETAIL_CHANGE:
      return { ...state, [action.name]: action.value };
    case actions.CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
}

export default delivery;

export const getDeliveryDetail = (state, name) => state[name];