import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {fetchItemList} from "./store/api-actions";
import store from "./store/store";


store.dispatch(fetchItemList())
.then(

    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`)
    )

);
