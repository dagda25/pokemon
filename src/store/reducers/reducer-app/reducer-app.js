import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";


const initialState = {
   items: [],
   currentItem: null,

};

const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ITEM_LIST:
      return Object.assign({}, state, {
        items: action.payload,
      });
    case ActionType.GET_ITEM:
      return Object.assign({}, state, {
        currentItem: action.payload,
      });
  }

  return state;
};

export {reducerApp};

