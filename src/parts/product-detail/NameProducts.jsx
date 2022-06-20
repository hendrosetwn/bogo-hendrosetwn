import React from 'react';
import { numberFormat } from "../../services/NumberFormat";

const NameProducts = (props) => {
  return (
    <div className="product-detail-second__title">
        <p className="product-detail-second__title--brand">
          {props.brand}
        </p>
        <p className="product-detail-second__title--product">
          {props.title}
        </p>
        <p className="product-detail-second__title--price">
          {numberFormat(props.price)}
        </p>
      </div>
  );
}

export default NameProducts;
