import {
  GET_COURSELIST,
  COURSELIST_LOADING,
  ADD_COURSE_BASIC,
  ADD_COURSE_BASIC_LOADING,
  GET_TEACHPLAN_LIST,
  TEACHPLANLIST_LOADING,
  COURSEBASIC_ADD_LOADING,
  COURSEBASIC_ADD,
  GET_COURSE_BASIC,
  GET_COURSE_BASIC_LOADING,
} from "../actionTypes";

const defaultState = {
  courseBasic: {},
  marketingInfo: {},
  courseImage: {},
  teachplanList: [],
  error: "",
  loading: false,
};

export const courseListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_COURSELIST: {
      return { ...state, courseBasic: payload };
    }
    case COURSELIST_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
};

export const getTeachplanListReducer = (
  state = {
    teachplanList: [],
    loading: false,
  },
  { type, payload }
) => {
  switch (type) {
    case GET_TEACHPLAN_LIST: {
      return { ...state, teachplanList: payload };
    }
    case TEACHPLANLIST_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
};

export const courseBasicAddReducer = (
  state = { loading: false, response: {} },
  { type, payload }
) => {
  switch (type) {
    case COURSEBASIC_ADD: {
      return { ...state, response: payload };
    }
    case COURSEBASIC_ADD_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
};
