import {ActionType} from "../../action";


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
};

const assignHeldImages = (state, data) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.currentItem.held_items.forEach((el, index) => {
    el.image = data[index].sprites.default;
  });

  return newState;
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
    case ActionType.GET_IMAGES:
      return assignImages(state, action.payload);
    case ActionType.GET_HELD_ITEMS_IMAGES:
      return assignHeldImages(state, action.payload);
    default:
      return state;
  }
};

export {reducerApp};

