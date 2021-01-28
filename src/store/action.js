export const ActionType = {
  GET_ITEM_LIST: `GET_ITEM_LIST`,
  GET_ITEM: `GET_ITEM`,
  GET_IMAGES: `GET_IMAGES`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
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
  getImages: (data) => ({
    type: ActionType.GET_IMAGES,
    payload: data
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
