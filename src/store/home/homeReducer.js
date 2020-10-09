import {PUT_CATEGORIES} from './homeActions';

const initialState = {
  slider: [],
  categories: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case PUT_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
