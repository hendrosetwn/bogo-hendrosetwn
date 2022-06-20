import React from "react";
import { numberFormat } from "../../services/NumberFormat";

const Quantity = (props) => {
  return (
    <>
      <div className="product-detail-second__form--quantity">
        <button
          className="product-detail-second__form--quantity--minus"
          onClick={props.handleDecrement}
        >
          <i className="bi bi-dash-lg"></i>
        </button>
        <h2
          className="product-detail-second__form--quantity--number"
          id="number-value"
        >
          {props.quantity}
        </h2>
        <button
          className="product-detail-second__form--quantity--plus"
          onClick={props.handleIncrement}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
      <div className="product-detail-second__form--total">
        <h2 className="product-detail-second__form--total--text">
          TOTAL THIS PRODUCTS :
        </h2>
        <p> {numberFormat(props.total)}</p>
      </div>
    </>
  );
};

export default Quantity;
