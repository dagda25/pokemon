import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import ItemCard from "../item-card/item-card";
import {fetchItem} from "../../store/api-actions";
import store from "../../store/store";


const ItemList = (props) => {
  const {items} = props;

  const handleClick = (evt) => {
  	evt.preventDefault();
  	store.dispatch(fetchItem(evt.target.innerText))
  }

  return (
	  <section className="item-section">
	    <ul className="item-list">
	    	{
		    	items.map((item, index) => {
		    		return <li key={index}><a href="#" onClick={handleClick}>{item.name}</a></li>
		    	})
	    	}
	    </ul>
	  </section>

  );
};


ItemList.propTypes = {
  
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
