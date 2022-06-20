import React from 'react';
import { numberFormat } from "../../services/NumberFormat";

const CheckoutProduct = (props) => {
    return (
        <div className="checkout__product">
              <img
                src={require(`../../assets/images/${props.images}`)}
                alt={props.title}
                className="checkout__product--img"
              />
              <div className="checkout__product--information">
                <h1>{props.title}</h1>
                <h3>
                  Size :<span> {props.size}</span>
                </h3>
                <h4>Quantity : <span>{props.quantity}</span></h4>
                <p>{numberFormat(props.subTotal)}</p>
              </div>
            </div>
    );
}

export default CheckoutProduct;
