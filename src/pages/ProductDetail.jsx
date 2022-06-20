import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/Data";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";

import "../assets/scss/index.scss";

import NameProducts from "../parts/product-detail/NameProducts";
import Quantity from "../parts/product-detail/Quantity";
import Description from "../parts/product-detail/Description";
import ImagePage from "../parts/product-detail/ImagePage";
import Size from "../parts/product-detail/Size";

class Productdetail extends Component {
  constructor() {
    super();
    this.state = {
      productDetail: {},
      total: 0,
      quantity: 1,
      size: "",
    };
  }

  componentDidMount() {
    products.forEach((item) => {
      if (item.slug === this.props.slug) {
        this.setState({
          productDetail: item,
          total: item.price,
        });
      }
    });
  }

  handleIncrement = () => {
    if (this.state.quantity === this.state.productDetail.stock) {
      this.setState({
        quantity: this.state.productDetail.stock,
      });
    } else {
      this.setState({
        quantity: this.state.quantity + 1,
        total: this.state.total + this.state.productDetail.price,
      });
    }
  };

  handleDecrement = () => {
    if (this.state.quantity === 1) {
      this.setState({
        quantity: 1,
      });
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
        total: this.state.total - this.state.productDetail.price,
      });
    }
  };

  handleSize = (e) => {
    this.setState({
      size: e.target.value,
    });
  };

  handleCart = () => {
    let userLogin = null;
    const emailLogin = localStorage.getItem("userLogin");
    const users = JSON.parse(localStorage.getItem("users"));
    users.forEach((user) => {
      if (user.email === emailLogin) {
        userLogin = user;
      }
    });

    let noUrut = 0;

    if (userLogin.carts.length === 0) {
      noUrut = 1;
    } else {
      noUrut = userLogin.carts.slice(-1).pop();
      noUrut = parseInt(noUrut.noUrut) + 1;
    }

    const newItem = {
      id: this.state.productDetail.id,
      quantity: this.state.quantity,
      size: this.state.size,
      noUrut: noUrut,
    };

    let isSame = false;
    userLogin.carts.forEach((item) => {
      if (this.state.productDetail.id === item.id) {
        isSame = true;
      }
    });

    if (this.state.size === "") {
      alertify.alert("Failed", "Choose your size");
    } else if (isSame) {
      alertify.alert("Failed", "This product is already in cart");
    } else {
      userLogin.carts.push(newItem);

      let userWithoutUserLogin = users.filter(
        (user) => user.email !== emailLogin
      );
      userWithoutUserLogin.push(userLogin);
      localStorage.setItem("users", JSON.stringify(userWithoutUserLogin));
      alertify
        .confirm(
          "Success",
          "This product success add to cart",
          () => {
            this.props.navigate("/cart");
          },
          function () {}
        )
        .set("labels", {
          ok: "Go to Cart Page",
          cancel: "Continue Shopping",
        });
    }
  };

  handleCheckOut = () => {
    let userLogin = null;
    const emailLogin = localStorage.getItem("userLogin");
    const users = JSON.parse(localStorage.getItem("users"));
    users.forEach((user) => {
      if (user.email === emailLogin) {
        userLogin = user;
      }
    });

    let noUrut = 0;

    if (userLogin.carts.length === 0) {
      noUrut = 1;
    } else {
      noUrut = userLogin.carts.slice(-1).pop();
      noUrut = parseInt(noUrut.noUrut) + 1;
    }

    const newItem = {
      id: this.state.productDetail.id,
      quantity: this.state.quantity,
      size: this.state.size,
      noUrut: noUrut,
    };

    let isSame = false;
    userLogin.carts.forEach((item) => {
      if (this.state.productDetail.id === item.id) {
        isSame = true;
      }
    });

    if (this.state.size === "") {
      alertify.alert("Failed", "Choose your size");
    } else if (isSame) {
      alertify.alert("Failed", "This product is already in cart");
    } else {
      userLogin.carts.push(newItem);

      let userWithoutUserLogin = users.filter(
        (user) => user.email !== emailLogin
      );
      userWithoutUserLogin.push(userLogin);
      localStorage.setItem("users", JSON.stringify(userWithoutUserLogin));
      alertify
        .confirm(
          "Notification",
          "Go to checkout page?",
          () => {
            this.props.navigate("/checkout");
          },
          function () {}
        )
        .set("labels", {
          ok: "Go to Checkout Page",
          cancel: "Continue Shopping",
        });
    }
  };

  render() {
    const productDetail = this.state.productDetail;

    return (
      <section id="product-detail" className="product-detail">
        {this.state.productDetail.images ? (
          <ImagePage images={this.state.productDetail.images} />
        ) : null}

        <div className="product-detail-second">
          <div className="product-detail-second__links">
            <Link to="/" className="product-detail-second__links--home">
              <span>Home</span>
            </Link>
            <i className="bi bi-caret-right-fill"></i>
            <p className="product-detail-second__links--product">
              {productDetail.title}
            </p>
          </div>

          <NameProducts
            price={productDetail.price}
            brand={productDetail.brand}
            title={productDetail.title}
          />

          <div className="product-detail-second__form">
            <p className="product-detail-second__form--text-size">Size</p>
            <div className="product-detail-second__form--size">
              {productDetail.size ? (
                <Size size={productDetail.size} handleSize={this.handleSize} />
              ) : null}
            </div>
            <p className="product-detail-second__form--text-quantity">
              Quantity
            </p>
            <Quantity
              price={this.state.productDetail.price}
              total={this.state.total}
              quantity={this.state.quantity}
              handleIncrement={this.handleIncrement}
              handleDecrement={this.handleDecrement}
            />
          </div>

          <div className="product-detail-second__button">
            <button
              type="button"
              className="product-detail-second__button--cart"
              onClick={this.handleCart}
            >
              Add to cart
            </button>
            <button
              type="button"
              className="product-detail-second__button--checkout"
              onClick={this.handleCheckOut}
            >
              Buy it now
            </button>
          </div>
          <Description
            description={productDetail.description}
            title={productDetail.title}
          />
        </div>
      </section>
    );
  }
}

const ProductDetailNavigate = () => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <Productdetail
      navigate={navigate}
      slug={params.slug}
      keywords={params.keywords}
    />
  );
};

export default ProductDetailNavigate;
