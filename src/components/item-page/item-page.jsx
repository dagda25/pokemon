import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import Header from "../header/header";


const ItemPage = (props) => {
  const {id} = props;

  return (
	  <div className="page item-page">
	    <Header />
	    <li>{id}item</li>

	  </div>
  );
};


ItemPage.propTypes = {
  
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
