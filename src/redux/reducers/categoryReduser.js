import { LOAD_CATEGORY_LIST, CATEGORY_LOADING } from "../actionTypes";

const defaultState = {
  categoryList: [],
  error: "",
  loading: false,
};

const categoryReduser = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOAD_CATEGORY_LIST: {
      return { ...state, categoryList: payload };
    }
    case CATEGORY_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
};

export default categoryReduser;
