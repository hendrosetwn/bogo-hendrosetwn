import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import alertify from "alertifyjs";

import "../assets/scss/index.scss";

import CartProduct from "../parts/cart/CartProduct";
import CartTotal from "../parts/cart/CartTotal";
import CartSelect from "../parts/cart/CartSelect";
import { products } from "../data/Data";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInCart: [],
      total: 0,
      subTotal: 0,
      cartCheckeds: [],
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

    this.setState({
      total: total,
      productInCart: productInCart,
    });
  }

  updateProduct = () => {
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

    this.setState({
      total: total,
      productInCart: productInCart,
    });
  };

  handleIncrement = (id) => {
    let products = this.state.productInCart.filter(
      (product) => product.id !== id
    );
    const productUpdate = this.state.productInCart.filter(
      (product) => product.id === id
    )[0];
    if (productUpdate.quantity === productUpdate.stock) {
      productUpdate.quantity = productUpdate.stock;
      productUpdate.subTotal = productUpdate.price * productUpdate.stock;
    } else {
      productUpdate.quantity += 1;
      productUpdate.subTotal = productUpdate.subTotal + productUpdate.price;
    }
    products.push(productUpdate);
    products = products.sort((a, b) => a.noUrut - b.noUrut);
    let total = 0;
    products.forEach((product) => {
      total += product.subTotal;
    });

    this.setState({
      total: total,
      productInCart: products,
    });

    const users = JSON.parse(localStorage.getItem("users"));
    const userLogin = users.filter(
      (user) => user.email === localStorage.getItem("userLogin")
    )[0];

    const carts = userLogin.carts;
    let cartWithoutItemUpdate = carts.filter((cart) => cart.id !== id);

    const cartNewItem = {
      id: productUpdate.id,
      noUrut: productUpdate.noUrut,
      quantity: productUpdate.quantity,
      size: productUpdate.size,
    };

    cartWithoutItemUpdate.push(cartNewItem);
    cartWithoutItemUpdate = cartWithoutItemUpdate.sort(
      (a, b) => a.noUrut - b.noUrut
    );

    userLogin.carts = cartWithoutItemUpdate;

    localStorage.setItem("users", JSON.stringify(userLogin));

    let userWithoutUserLogin = users.filter(
      (user) => user.email !== localStorage.getItem("userLogin")
    );
    userWithoutUserLogin.push(userLogin);

    localStorage.setItem("users", JSON.stringify(userWithoutUserLogin));
    this.updateProduct();
  };

  handleDecrement = (id) => {
    let products = this.state.productInCart.filter(
      (product) => product.id !== id
    );
    const productUpdate = this.state.productInCart.filter(
      (product) => product.id === id
    )[0];

    if (productUpdate.quantity === 1) {
      productUpdate.quantity = 1;
      productUpdate.subTotal = productUpdate.price;
    } else {
      productUpdate.quantity -= 1;
      productUpdate.subTotal = productUpdate.subTotal - productUpdate.price;
    }

    products.push(productUpdate);
    products = products.sort((a, b) => a.noUrut - b.noUrut);

    let total = 0;
    products.forEach((product) => {
      total += product.subTotal;
    });

    this.setState({
      total: total,
      productInCart: products,
    });

    const users = JSON.parse(localStorage.getItem("users"));
    const userLogin = users.filter(
      (user) => user.email === localStorage.getItem("userLogin")
    )[0];

    const carts = userLogin.carts;
    let cartWithoutItemUpdate = carts.filter((cart) => cart.id !== id);

    const cartNewItem = {
      id: productUpdate.id,
      noUrut: productUpdate.noUrut,
      quantity: productUpdate.quantity,
      size: productUpdate.size,
    };

    cartWithoutItemUpdate.push(cartNewItem);
    cartWithoutItemUpdate = cartWithoutItemUpdate.sort(
      (a, b) => a.noUrut - b.noUrut
    );

    userLogin.carts = cartWithoutItemUpdate;

    localStorage.setItem("users", JSON.stringify(userLogin));

    let userWithoutUserLogin = users.filter(
      (user) => user.email !== localStorage.getItem("userLogin")
    );

    userWithoutUserLogin.push(userLogin);

    localStorage.setItem("users", JSON.stringify(userWithoutUserLogin));
    this.updateProduct();
  };

  handleDeleteAll = () => {
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
    this.updateProduct();
  };

  handleDeleteCart = (id) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const userLogin = users.filter(
      (user) => user.email === localStorage.getItem("userLogin")
    )[0];
    const userCart = userLogin.carts;
    const newCart = userCart.filter((cart) => cart.id !== id);
    userLogin.carts = newCart;

    let userWithoutUserLogin = users.filter(
      (user) => user.email !== localStorage.getItem("userLogin")
    );

    userWithoutUserLogin.push(userLogin);
    localStorage.setItem("users", JSON.stringify(userWithoutUserLogin));
    this.updateProduct();
  };

  handleCheckout = () => {
    alertify
      .confirm(
        "Notification",
        "Are you sure going to checkout pages?",
        () => {
          this.props.navigate("/checkout");
        },
        function () {}
      )
      .set("labels", {
        ok: "Go to Checkout Page",
        cancel: "Stay in Cart Page",
      });
  };

  render() {
    return (
      <section className="cart">
        <div className="cart__header">
          <h1 className="cart__header--title">CART</h1>
        </div>

        <div className="cart__content">
          <div className="first">
            <CartSelect handleDeleteAll={this.handleDeleteAll} />

            {this.state.productInCart.map((product) => {
              return (
                <CartProduct
                  handleReload={this.handleReload}
                  handleIncrement={this.handleIncrement}
                  handleDecrement={this.handleDecrement}
                  handleDeleteCart={this.handleDeleteCart}
                  handleChecked={this.handleChecked}
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

          <div className="second">
            <CartTotal total={this.state.total} />

            <button
              className="second__select"
              type="button"
              onClick={this.handleCheckout}
            >
              Check Out
            </button>
          </div>
        </div>
      </section>
    );
  }
}

const CartNavigate = () => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <Cart navigate={navigate} slug={params.slug} keywords={params.keywords} />
  );
};

export default CartNavigate;
