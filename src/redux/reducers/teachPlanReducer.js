import { GET_TEACHPLAN_LIST, TEACHPLANLIST_LOADING } from "../actionTypes";

const defaultState = {
  teachPlanList: [],
  error: "",
  loading: false,
};

const teachPlanReduser = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_TEACHPLAN_LIST: {
      return { ...state, teachPlanList: payload };
    }
    case TEACHPLANLIST_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
};

export default teachPlanReduser;
