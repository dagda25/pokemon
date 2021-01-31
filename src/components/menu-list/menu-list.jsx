import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchItem} from "../../store/api-actions";
import store from "../../store/store";
import {capitalize} from "../../utils/utils";

const MenuList = (props) => {
  const {items} = props;

  const [menuStatus, setMenuStatus] = React.useState(false);

  const handleClick = () => {
    setMenuStatus(menuStatus ? false : true);
  };
  const handleCloseClick = (evt) => {
    evt.preventDefault();
    setMenuStatus(false);
  };
  const handleLinkClick = (evt) => {
    store.dispatch(fetchItem(evt.currentTarget.dataset.id));
  };

  return (
    <>
      <div className={menuStatus ? `menu-button menu-open` : `menu-button`}>
        <div className="menu-button" onTouchStart={handleClick}>Меню</div>
        <ul className="menu-list">
          {
            items.map((item, index) => {
              return <li className="menu-item" data-id={item.name} onClick={handleLinkClick} key={index}>
                {capitalize(item.name)}
              </li>;
            })
          }
          <img className="menu-close" onTouchStart={handleCloseClick} src="/img/close.png"/>
        </ul>
      </div>

    </>

  );
};


MenuList.propTypes = {
  items: PropTypes.array,
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
