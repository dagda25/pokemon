import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MenuList from "../menu-list/menu-list";


const Header = (props) => {
  const {items} = props;

  return (
    <header className="main-header">
    	<nav className="main-nav">
    		<a href="/">Главная</a>
    		<MenuList />

    	</nav>

    </header>
  );
};


Header.propTypes = {
  
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
