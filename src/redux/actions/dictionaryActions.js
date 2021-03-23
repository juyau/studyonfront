import * as API from "../../api";
import { GET_DICTIONARY, DICTIONARY_LOADING } from "../actionTypes";

export const getDictionaryByDname = (dname) => {
  return async (dispatch) => {
    dispatch({
      type: DICTIONARY_LOADING,
      payload: true,
    });
    try {
      const response = await API.getDictionaryByDname(dname);
      if (response.data) {
        // console.log(response.data);
        dispatch({
          type: GET_DICTIONARY,
          payload: response.data,
        });
      }
      dispatch({
        type: DICTIONARY_LOADING,
        payload: false,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: DICTIONARY_LOADING,
        payload: false,
      });
    }
  };
};
