import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import ItemCard from "../item-card/item-card";
import {fetchItem, fetchItemWithoutRedirect} from "../../store/api-actions";
import store from "../../store/store";

const ItemList = (props) => {
  const {items} = props;


  return (
	  <section className="item-section">
	    <ul className="item-list">
	    	{
		    	items.map((item, index) => {
		    		return <ItemCard key={index} data={item}/>
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
