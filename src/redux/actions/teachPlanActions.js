import * as API from "../../api";
import { TEACHPLANLIST_LOADING, GET_TEACHPLAN_LIST } from "../actionTypes";

export const getTeachPlanByCourseId = (courseId) => {
  return async (dispatch) => {
    dispatch({
      type: TEACHPLANLIST_LOADING,
      payload: true,
    });
    try {
      const response = await API.getTeachPlanByCourseId(courseId);
      if (response.data) {
        const teachPlanList = response.data.children;
        dispatch({
          type: GET_TEACHPLAN_LIST,
          payload: teachPlanList,
        });
      }
      dispatch({
        type: TEACHPLANLIST_LOADING,
        payload: false,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: TEACHPLANLIST_LOADING,
        payload: false,
      });
    }
  };
};
