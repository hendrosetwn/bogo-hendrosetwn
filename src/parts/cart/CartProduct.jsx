import React from "react";
import { Link } from "react-router-dom";
import { numberFormat } from "../../services/NumberFormat";

const CartProduct = (props) => {
  return (
    <div className="first__product">
      <div className="first__product--check">
        <input
          type="checkbox"
          id={`product-${props.id}`}
          name={`product-${props.id}`}
          defaultValue={`product-${props.id}`}
        />
        <label htmlFor={`product-${props.id}`}>
          <img
            src={require(`../../assets/images/${props.images}`)}
            alt={props.title}
          />
        </label>
      </div>
      <div className="first__product--information">
        <div
          className="first__product--information--link"
          to={`/products/${props.keywords}/${props.slug}`}
        >
          <h1 id="cart-title">{props.title}</h1>
        </div>
        <h3>
          Size :<span> {props.size}</span>
        </h3>
        <p className="first__product--information--price">
          Price : <span>{numberFormat(props.price)}</span>
        </p>
        <div className="first__product--information--quantity">
          <button
            className="first__product--information--quantity--minus"
            onClick={() => props.handleDecrement(props.id)}
          >
            <i className="bi bi-dash-lg"></i>
          </button>
          <h2 className="first__product--information--quantity--number">
            {props.quantity}
          </h2>
          <button
            className="first__product--information--quantity--plus"
            onClick={() => props.handleIncrement(props.id)}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
        <p className="first__product--information--subtotal">
          Total : <span>{numberFormat(props.subTotal)}</span>
        </p>
      </div>
      <div className="first__product--close">
        <i
          className="bi bi-x-lg"
          onClick={() => props.handleDeleteCart(props.id)}
        ></i>
      </div>
    </div>
  );
};

export default CartProduct;
