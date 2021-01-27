import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {fetchItemList} from "./store/api-actions";
import store from "./store/store";

const customOptions = {
  cache: true,
  cacheImages: true
}
const P = new Pokedex.Pokedex(customOptions)

P.resource([
  "https://pokeapi.co/api/v2/pokemon?limit=100",
]).then( response => {
  console.log(response)
})

store.dispatch(fetchItemList()).then(

    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`)
    )

);
