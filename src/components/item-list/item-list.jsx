import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ItemCard from "../item-card/item-card";


const ItemList = (props) => {
  const {items} = props;


  return (
    <section className="item-section">
      <ul className="item-list">
        {
          items.map((item, index) => {
            return <ItemCard key={index} data={item}/>;
          })
        }
      </ul>
    </section>

  );
};


ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
