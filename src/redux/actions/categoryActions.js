import * as API from "../../api";
import { CATEGORY_LOADING, LOAD_CATEGORY_LIST } from "../actionTypes";

export const loadCategoryList = () => {
  return async (dispatch) => {
    dispatch({
      type: CATEGORY_LOADING,
      payload: true,
    });
    try {
      const response = await API.loadCategory();
      if (response.data) {
        const cateList = response.data.subCategoryList;
        dispatch({
          type: LOAD_CATEGORY_LIST,
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
