import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import store from "../../store/store";
import {fetchItem} from "../../store/api-actions";
import {capitalize} from "../../utils/utils";


const ItemCard = (props) => {
  const {data, key} = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    store.dispatch(fetchItem(evt.currentTarget.dataset.id));
  };

  return (
    <li key={key} className="item" onClick={handleClick} data-id={data.name}>
      <img className="item-image" src={data.images ? data.images.front_default : `img/loader.gif`}/>
      <div className="item-name" href="#">{capitalize(data.name)}</div>
    </li>

  );
};


ItemCard.propTypes = {
  data: PropTypes.object,
  key: PropTypes.number.isRequired,
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
