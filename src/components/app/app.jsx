
import '../../App.css';

import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainPage from "../main-page/main-page";
import ItemPage from "../item-page/item-page";
import {login} from "../../store/api-actions";
import browserHistory from "../../browser-history";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../utils/const";


const App = (props) => {
  const {} = props;

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

const mapDispatchToProps = (dispatch) => ({

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

