import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card">
      <div className="category">{props.category}</div>
      <div className="image">
        <img alt="element" src={props.image} />
      </div>
      <div className="name">{props.name}</div>
      <div className="price">{`Price: ${props.price} €`}</div>
    </div>
  );
};

Card.propTypes = {
  category: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
