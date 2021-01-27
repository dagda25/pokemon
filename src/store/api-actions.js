import {ActionCreator} from "./action";
import {AppRoute, APIRoute} from "../utils/const";

const customOptions = {
  cache: true,
  cacheImages: true
}
const P = new Pokedex.Pokedex(customOptions)

export const fetchItemList = () => (dispatch, _getState, api) => (
  P.resource([
    "https://pokeapi.co/api/v2/pokemon?limit=100",
  ]).then((data) => {
     console.log(data[0].results)
     dispatch(ActionCreator.getItemList(data[0].results));
  })
);

export const fetchItem = (name) => (dispatch, _getState, api) => (
  P.getPokemonByName(name)
    .then((data) => {
      dispatch(ActionCreator.getItem(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.ITEM}/${name}`)))
);

