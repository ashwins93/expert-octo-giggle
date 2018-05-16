import * as actions from '../actions/actionTypes';

const initialState = {
  salesHead: '',
  distributor: '',
  endUser: ''
}

const contact = (state = initialState, action) => {
  switch (action.type) {
    case actions.SALES_CONTACT_DETAIL_CHANGE:
      return { ...state, [action.name]: action.value }
    case actions.SALES_FETCH_HEAD:
      return { ...state, salesHead: action.salesHead };
    case actions.CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export default contact;

export const getContactDetail = (state, name) => state[name];