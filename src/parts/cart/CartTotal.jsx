import React from 'react';
import { numberFormat } from "../../services/NumberFormat";

const CartTotal = (props) => {
    return (
        <div className="second__subtotal">
          <div className="second__subtotal--price">
            <p className="second__subtotal--price--total">SUBTOTAL</p>
            <p className="second__subtotal--price--price">{numberFormat(props.total)}</p>
          </div>
          <p className="second__subtotal--text">
            Shipping, taxes, and discount codes are calculated at checkout.
          </p>
        </div>
    );
}

export default CartTotal;
