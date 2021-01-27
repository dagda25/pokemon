import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import ItemList from "../item-list/item-list";
import Header from "../header/header";


const MainPage = (props) => {
  const {itemsList} = props;

  return (
    <div className="page main-page">
      <Header />
      <ItemList />

    </div>
  );
};


MainPage.propTypes = {
  
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = (dispatch) => ({

});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
