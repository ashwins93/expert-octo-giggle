import * as actions from '../actions/actionTypes';

const initialState = {
  distributors: [],
  endUsers: [],
  salesHead: '',
  categories: [],
  items: []
};

const options = (state = initialState, action) => {
  switch (action.type) {
    case actions.SALES_FETCH_OPTIONS:
      return {
        ...state,
        [action.optionsFor]: action.options
      };
    case actions.SALES_FETCH_HEAD:
      return {
        ...state,
        salesHead: action.salesHead
      }
    default:
      return state;
  }
};

export default options;

export const getOptions = (state, type) => state[type];
export const getSalesHead = (state) => state.salesHead;