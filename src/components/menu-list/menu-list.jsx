import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {fetchItem} from "../../store/api-actions";
import store from "../../store/store";


const MenuList = (props) => {
  const {items} = props;

  const [menuStatus, setMenuStatus] = React.useState(false);

  const handleClick = (evt) => {
  	evt.preventDefault();
  	menuStatus ? setMenuStatus(false) : setMenuStatus(true);
  }

  return (
  	<>
	  <div className={menuStatus ? "menu-button menu-open" : "menu-button"} onClick={handleClick}>
	  	Меню
  	      <ul className="menu-list">
  	    	{
  		    	items.map((item, index) => {
  		    		return <li key={index}><a href="#" onClick={handleClick}>{item.name}</a></li>
  		    	})
  	    	}
  	      </ul>	  
	  </div>

	</>

  );
};


MenuList.propTypes = {
  
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
