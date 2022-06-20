import React from 'react';
import { numberFormat } from "../../services/NumberFormat";

const CheckoutInformation = (props) => {
    return (
        <div className="checkout__payment">
            <div className="checkout__payment--address">
              <h1>Delivery Address</h1>
              <h2>{props.name}</h2>
              <h3>{props.phone}</h3>
              <p>
                {props.address}, {props.city}, {props.province}
              </p>
            </div>
            <div className="checkout__payment--option">
              <label htmlFor="delivery" className="label-delivery">
                Delivery Method :
              </label>
              <select
                id="delivery"
                className="select-delivery"
                placeholder="Courier"
              >
                <option defaultValue="Bogo Courier">Bogo Courier</option>
                <option defaultValue="SiCepat">SiCepat</option>
                <option defaultValue="JnT">JnT</option>
              </select>
              <label htmlFor="payment" className="label-payment">
                Payment Method :
              </label>
              <select id="payment" className="select-payment">
                <option defaultValue="volvo">Debit/Credit Card</option>
                <option defaultValue="saab">DANA</option>
                <option defaultValue="opel">Transer Bank</option>
              </select>
            </div>
            <div className="checkout__payment--price">
              <p>
                Subtotal :{" "}
                <span>{numberFormat(props.total)}</span>
              </p>
              <p>
                Tax (10%) : <span>{numberFormat(props.total * 0.1)}</span>
              </p>
              <p>
                Delivery cost : <span>{numberFormat(0)} (Free)</span>
              </p>
              <h3>
                Grand Total : <span>{numberFormat(props.total * 1.1)}</span>
              </h3>
            </div>
            <button type="submit" className="checkout__payment--button" onClick={props.handlePay}>
              Pay Now
            </button>
          </div>
    );
}

export default CheckoutInformation;
