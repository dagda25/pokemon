import {ActionCreator} from "./action";
import {AppRoute, APIRoute} from "../utils/const";
import {settings} from "../utils/const";

const customOptions = {
  cache: true,
  cacheImages: true
}
const P = new Pokedex.Pokedex(customOptions)

export const fetchItemList = () => (dispatch, _getState, api) => (
  P.resource([
    `https://pokeapi.co/api/v2/pokemon?limit=${settings.FETCH_COUNT}`,
  ]).then((data) => {
   
     dispatch(ActionCreator.getItemList(data[0].results));
     return data
  }).then((data) => {
    const arr =data[0].results.map((el) => {
       return el.url;
    })
    return P.resource(arr)
  }).then((data) => {
    const images = data.map((el) => {
      return el.sprites;
    })
    dispatch(ActionCreator.getImages(images));
  })
);

export const fetchItem = (name) => (dispatch, _getState, api) => (
  P.getPokemonByName(name)
    .then((data) => {
      dispatch(ActionCreator.getItem(data));
      return data;
    })
    .then((data) => {
      const arr = data.held_items.map((el) => {
         return el.item.url;
      })
      return P.resource(arr)
    })
    .then((data) => {
      dispatch(ActionCreator.getHeldItemsImages(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`/${AppRoute.ITEM}/${name}`)))
);

export const fetchItemWithoutRedirect = (name) => (dispatch, _getState, api) => (
  P.getPokemonByName(name)
    .then((data) => {
      dispatch(ActionCreator.getItem(data));
      return data;
    })
    .then((data) => {
      const arr = data.held_items.map((el) => {
         return el.item.url;
      })
      return P.resource(arr)
    })
    .then((data) => {
      dispatch(ActionCreator.getHeldItemsImages(data));
    })
);

