import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import Header from "../header/header";
import {fetchItem, fetchItemWithoutRedirect} from "../../store/api-actions";
import store from "../../store/store";
import browserHistory from "../../browser-history";
import {capitalize} from "../../utils/utils";


const ItemPage = (props) => {
  const pathName = browserHistory.location.pathname.split("/").[2];

  if (!props.currentItem || props.currentItem.name !== pathName) {
  	store.dispatch(fetchItemWithoutRedirect(pathName));
  	return <img style={{marginLeft: "auto", marginRight: "auto", marginTop: "20%"}} src="/img/loader.gif"/>
  }

  const {abilities, forms, height, weight, base_experience, held_items, species, stats, sprites, heldImages, name} = props.currentItem;

  const customOptions = {
    cache: true,
    cacheImages: true
  }
  const P = new Pokedex.Pokedex(customOptions);


  return (
	  <div className="page item-page">
	    <Header />
	      <main className="item-content">
	      	  <div className="item-title"><p>{capitalize(name)}</p></div>
		      <div className="item-abilities">
		      	Abilities
			    {
			    abilities.map((el, i) => {
			    	return <div key={i} className="item-ability">{el.ability.name}</div>
			    })

			    }
			  </div> 
			  <div className="item-images">
			  	{sprites.front_default && <img src={sprites.front_default}/>}
			  	{sprites.front_shiny && <img src={sprites.front_shiny}/>}
			  	{sprites.back_default && <img src={sprites.back_default}/>}
			  	{sprites.front_shiny && <img src={sprites.back_shiny}/>}
			  </div>
			  <div className="item-held">
			  	<p>{held_items.length ? "Items" : "No items"}</p>
			  	{
				  	held_items.map((el) => {
				  		  return (
					  		  <div className="item-held-unit">
					  		  	<img src={el.image} className="item-held-image"/>
					  		  	<div className="item-held-name">{capitalize(el.item.name)}</div>
					  		  </div>
				  		  )
				  	})
			  	}
			  </div>
			  <div className="item-height">Height: {height}</div>
			  <div className="item-weight">Weight: {weight}</div>
			  <div className="item-exp">Experience: {base_experience}</div>
			  <div className="item-stats">Stats:
			  	{
			  		stats.map((el) => {
			  			return (
			  				<div className="item-stat-block">
			  					<div className="item-stat-name">{el.stat.name}</div> 
			  					<div className="item-stat-value">{el.base_stat}</div> 	
			  				</div>
			  			)
			  		})

			  	}
			  </div>
			</main>

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
