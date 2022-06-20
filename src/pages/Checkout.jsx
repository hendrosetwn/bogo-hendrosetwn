import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/index.scss";
import alertify from "alertifyjs";

import { products } from "../data/Data";
import { useNavigate } from "react-router-dom";

import CheckoutProduct from "../parts/checkout/CheckoutProduct";
import CheckoutInformation from "../parts/checkout/CheckoutInformation";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      productInCart: [],
      name: "",
      address: "",
      city: "",
      province: "",
      phone: "",
    };
  }

  componentDidMount() {
    const emailLogin = localStorage.getItem("userLogin");
    const users = JSON.parse(localStorage.getItem("users"));
    const userLogin = users.filter((user) => user.email === emailLogin)[0];
    let total = 0;
    let productInCart = [];
    userLogin.carts.forEach((cart) => {
      const product = products.filter((product) => product.id === cart.id)[0];
      total += product.price * cart.quantity;
      product.quantity = cart.quantity;
      product.size = cart.size;
      product.id = cart.id;
      product.subTotal = product.price * cart.quantity;
      product.noUrut = cart.noUrut;
      productInCart.push(product);
    });

    if (userLogin) {
      this.setState({
        name: userLogin.name,
        address: userLogin.address,
        city: userLogin.city,
        province: userLogin.province,
        phone: userLogin.phone,
      });
    }

    this.setState({
      total: total,
      productInCart: productInCart,
    });
  }

  handlePay = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    let userLogin = users.filter(
      (user) => user.email === localStorage.getItem("userLogin")
    )[0];
    userLogin.carts = [];

    let userWithoutUserLogin = users.filter(
      (user) => user.email !== localStorage.getItem("userLogin")
    );

    userWithoutUserLogin.push(userLogin);
    localStorage.setItem("users", JSON.stringify(userWithoutUserLogin));
    alertify.alert("Success", "Your product will be process");
    this.props.navigate("/");
  };

  render() {
    return (
      <section className="checkout">
        <div className="checkout__header">
          <Link to="/cart" className="checkout__header--link">
            <i className="bi bi-chevron-double-left"></i>
            Back to Cart
          </Link>
          <h1 className="checkout__header--title">Checkout</h1>
        </div>
        <div className="checkout__content">
          <div className="checkout__content--product">
            {this.state.productInCart.map((product) => {
              return (
                <CheckoutProduct
                  quantity={product.quantity}
                  key={product.id}
                  id={product.id}
                  size={product.size}
                  price={product.price}
                  keywords={product.keywords}
                  slug={product.slug}
                  title={product.title}
                  images={product.images[0]}
                  subTotal={product.subTotal}
                />
              );
            })}
          </div>

          <CheckoutInformation
            handlePay={this.handlePay}
            total={this.state.total}
            name={this.state.name}
            address={this.state.address}
            city={this.state.city}
            province={this.state.province}
            phone={this.state.phone}
          />
        </div>
      </section>
    );
  }
}

const CheckoutNavigate = () => {
  const navigate = useNavigate();
  return <Checkout navigate={navigate} />;
};

export default CheckoutNavigate;
