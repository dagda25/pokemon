export const ActionType = {
  GET_ITEM_LIST: `GET_ITEM_LIST`,
  GET_ITEM: `GET_ITEM`,
  GET_IMAGES: `GET_IMAGES`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  GET_HELD_ITEMS_IMAGES: `GET_HELD_ITEMS_IMAGES`,
};

export const ActionCreator = {
  getItemList: (data) => ({
    type: ActionType.GET_ITEM_LIST,
    payload: data
  }),
  getItem: (data) => ({
    type: ActionType.GET_ITEM,
    payload: data
  }),
  getHeldItemsImages: (data) => ({
    type: ActionType.GET_HELD_ITEMS_IMAGES,
    payload: data
  }),
  getImages: (data) => ({
    type: ActionType.GET_IMAGES,
    payload: data
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
