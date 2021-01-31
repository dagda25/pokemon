import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import {fetchItemWithoutRedirect} from "../../store/api-actions";
import store from "../../store/store";
import browserHistory from "../../browser-history";
import {capitalize} from "../../utils/utils";


const ItemPage = (props) => {
  const {currentItem} = props;
  const pathName = browserHistory.location.pathname.split(`/`)[2];

  if (!props.currentItem || props.currentItem.name !== pathName) {
    store.dispatch(fetchItemWithoutRedirect(pathName));
    return <img style={{marginLeft: `auto`, marginRight: `auto`, marginTop: `20%`}} src="/img/loader.gif"/>;
  }

  const {abilities, height, weight, base_experience, held_items, stats, sprites, name} = currentItem;


  return (
    <div className="page item-page">
      <Header />
      <main className="item-content">
        <div className="item-title"><p>{capitalize(name)}</p></div>
        <div className="item-abilities">
          <p className="title">Abilities</p>
          {
            abilities.map((el, i) => {
              return <div key={i} className="item-ability">{capitalize(el.ability.name)}</div>;
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
          <p>{held_items.length ? `Items` : `No items`}</p>
          {
            held_items.map((el, i) => {
              return (
                <div className="item-held-unit" key={i}>
                  <img src={el.image} className="item-held-image"/>
                  <div className="item-held-name">{capitalize(el.item.name)}</div>
                </div>
              );
            })
          }
        </div>
        <div className="item-characteristic">
          <div className="item-height"><p className="title">Height: </p><div className="value">{height}</div></div>
          <div className="item-weight"><p className="title">Weight: </p><div className="value">{weight}</div></div>
          <div className="item-exp"><p className="title">Experience: </p><div className="value">{base_experience}</div></div>
        </div>
        <div className="item-stats"><p className="title">Stats: </p>
          {
            stats.map((el, i) => {
              return (
                <div className="item-stat-block" key={i}>
                  <div className="item-stat-value">{el.base_stat}</div>
                  <div className="column" style={{height: `${el.base_stat}px`}}></div>
                  <div className="item-stat-name">{capitalize(el.stat.name)}</div>
                </div>
              );
            })

          }
        </div>
      </main>

    </div>
  );
};


ItemPage.propTypes = {
  currentItem: PropTypes.obj,
};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
