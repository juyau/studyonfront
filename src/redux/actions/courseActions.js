import * as API from "../../api";
import {
  ADD_COURSE_BASIC_LOADING,
  ADD_COURSE_BASIC,
  TEACHPLANLIST_LOADING,
  GET_TEACHPLAN_LIST,
  COURSEBASIC_ADD,
  COURSEBASIC_ADD_LOADING,
} from "../actionTypes";

export const courseBasicAdd = (courseBasic) => {
  return async (dispatch) => {
    dispatch({
      type: COURSEBASIC_ADD_LOADING,
      payload: true,
    });
    try {
      const response = await API.courseBasicAdd(courseBasic);
      if (response.data) {
        dispatch({
          type: COURSEBASIC_ADD,
          payload: response.data,
        });
      }
      dispatch({
        type: COURSEBASIC_ADD_LOADING,
        payload: false,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: COURSEBASIC_ADD_LOADING,
        payload: false,
      });
    }
  };
};

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
