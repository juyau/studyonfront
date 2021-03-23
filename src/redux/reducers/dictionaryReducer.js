import { GET_DICTIONARY, DICTIONARY_LOADING } from "../actionTypes";

const defaultState = {
  dictionaryList: {}, // in the array, each element is a object with dname as key,
  error: "",
  loading: false,
};

const dictionaryReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_DICTIONARY: {
      // console.log({ [payload.dname]: payload });
      return {
        ...state,
        dictionaryList: { ...state.dictionaryList, [payload.dname]: payload },
      };
    }
    case DICTIONARY_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
};

export default dictionaryReducer;
