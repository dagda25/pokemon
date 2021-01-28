import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import store from "../../store/store";
import {fetchItem} from "../../store/api-actions";


const ItemCard = (props) => {
  const {data, key} = props;

  const handleClick = (evt) => {
  	evt.preventDefault();
  	store.dispatch(fetchItem(evt.currentTarget.dataset.id));
  }

  return (
    	<li key={key} className="item" onClick={handleClick} data-id={data.name}>
    	  <img className="item-image" src={data.images ? data.images.front_default : "img/loader.gif"}/>
    	  <div className="item-name" href="#">{data.name}</div>
    	</li>

  );
};


ItemCard.propTypes = {
  
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
