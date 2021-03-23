import axios from "axios";
import { BASE_URL, FILE_URL } from "../config";

// export default axios.create({
//   baseURL: "http://localhost:8080",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

export const getCategoryList = () => {
  return axios.get(`${BASE_URL}/course/category/list`);
};

export const getTeachPlanByCourseId = (courseId) => {
  return axios.get(`${BASE_URL}/course/teachplanlist/${courseId}`);
};

export const getDictionaryByDname = (dname) => {
  return axios.get(`${BASE_URL}/course/dictionary/bydname/${dname}`);
};

export const courseBasicAdd = (courseBasic) => {
  return axios.post(`${BASE_URL}/course/coursebasic/add`, courseBasic);
};

// upload files
export const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return axios.post(`${FILE_URL}/file/admin/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};
