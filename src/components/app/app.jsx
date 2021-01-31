
import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import MainPage from "../main-page/main-page";
import ItemPage from "../item-page/item-page";
import browserHistory from "../../browser-history";
import {Redirect} from "react-router-dom";
import {AppRoute} from "../../utils/const";
import '../../App.css';


const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact path={AppRoute.ROOT}
          render={() => (
            <MainPage/>
          )}
        />
        <Route exact path="/item/:id?"
          render={({match}) => {
            const {id} = match.params;
            return (
              <ItemPage
                id={id}
              />
            );
          }} />
        <Route
          render={() => (
            <Redirect to={AppRoute.ROOT} />
          )}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {

};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

