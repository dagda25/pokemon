import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";


const initialState = {
   items: [],
   currentItem: null,

};

const assignImages = (state, data) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.items.forEach((el, index) => {
    el.images = data[index];
  });
  return newState;
}

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
    case ActionType.GET_IMAGES:
      return assignImages(state, action.payload);
  }

  return state;
};

export {reducerApp};

