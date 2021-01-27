import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const ItemCard = (props) => {
  const {items} = props;

  return (
    	<li>list</li>

  );
};


ItemCard.propTypes = {
  
};

const mapStateToProps = ({APP}) => ({
  items: DATA.items,
  currentItem: DATA.currentItem,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
