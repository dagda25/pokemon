import React from "react";
import {connect} from "react-redux";
import ItemList from "../item-list/item-list";
import Header from "../header/header";


const MainPage = () => {

  return (
    <div className="page main-page">
      <Header />
      <ItemList />

    </div>
  );
};


const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
