import React from "react";
import {connect} from "react-redux";
import MenuList from "../menu-list/menu-list";


const Header = () => {

  return (
    <header className="main-header">
      <nav className="main-nav">
        <a href="/">Главная</a>
        <MenuList />

      </nav>

    </header>
  );
};


const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
