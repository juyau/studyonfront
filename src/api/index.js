import axios from "axios";
import { BASE_URL } from "../config";

export const loadCategory = () => {
  return axios.get(`${BASE_URL}/course/category/list`);
};
