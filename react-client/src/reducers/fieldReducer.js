import { GET_FIELDS } from "../actions/types";

const initialState = {
  fields: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FIELDS:
      return {
        ...state,
        fields: action.payload
      };
    default:
      return state;
  }
}
