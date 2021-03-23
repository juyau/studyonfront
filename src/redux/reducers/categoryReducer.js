import { GET_CATEGORY_LIST, CATEGORY_LOADING } from "../actionTypes";

const defaultState = {
  categoryList: [],
  loading: false,
};

const categoryReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY_LIST: {
      return { ...state, categoryList: payload };
    }
    case CATEGORY_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
};

export default categoryReducer;
