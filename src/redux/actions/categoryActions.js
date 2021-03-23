import * as API from "../../api";
import { CATEGORY_LOADING, GET_CATEGORY_LIST } from "../actionTypes";

export const getCategoryList = () => {
  return async (dispatch) => {
    dispatch({
      type: CATEGORY_LOADING,
      payload: true,
    });
    try {
      const response = await API.getCategoryList();
      if (response.data) {
        const cateList = response.data.subCategoryList;
        dispatch({
          type: GET_CATEGORY_LIST,
          payload: cateList,
        });
      }
      dispatch({
        type: CATEGORY_LOADING,
        payload: false,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: CATEGORY_LOADING,
        payload: false,
      });
    }
  };
};
