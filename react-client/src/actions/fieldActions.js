import { GET_FIELDS } from "./types";
import axios from "axios";

export const getFields = () => async dispatch => {
  const res = await axios.get("api/v1/fields");
  dispatch({
    type: GET_FIELDS,
    payload: res.data
  });
};
