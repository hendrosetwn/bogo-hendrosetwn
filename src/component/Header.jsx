import React from "react";
import "../assets/scss/Header.scss";
import Logo from "../assets/images/logoo.png";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      address: "",
      city: "",
      email: "",
      province: "",
    };
  }

  handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
  };

  componentDidMount() {
    const emailLogin = localStorage.getItem("userLogin");
    const users = JSON.parse(localStorage.getItem("users"));
    if (emailLogin && users) {
      const userLogin = users.filter((user) => user.email === emailLogin)[0];
      if (userLogin) {
        this.setState({
          name: userLogin.name,
          address: userLogin.address,
          city: userLogin.city,
          phone: userLogin.phone,
          email: userLogin.email,
          province: userLogin.province,
        });
      }
    }
  }

  render() {
    const isAuthenticad = localStorage.getItem("isAuthenticated");
    const navLink = () => {
      if (isAuthenticad) {
        return (
          <div className="headerUp__after">
            <Link to="/cart">
              <i className="bi bi-bag-fill"></i>
            </Link>
            <i className="bi bi-bell-fill"></i>
            <Popup
              trigger={
                <div>
                  <i className="bi bi-person-fill person"></i>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="popup--profile">
                  <h2>My Profile</h2>
                  <p>
                    Name :{" "}<span>{this.state.name}</span>
                  </p>
                  <p>
                    Email :{" "}<span className="email">{this.state.email}</span>
                  </p>
                  <p>
                    Phone Number :{" "}<span>{this.state.phone}</span>
                  </p>
                  <p>
                    Address :{" "}
                    <span>
                      {this.state.address},{" "}{this.state.city},{" "}
                      {this.state.province}
                    </span>
                  </p>
                  <button className="close" onClick={close}>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                </div>
              )}
            </Popup>
            <Link to="/">
              <button
                type="submit"
                className="headerUp__after--logout"
                onClick={this.handleLogout}
              >
                Logout
              </button>
            </Link>
          </div>
        );
      } else {
        return (
          <div className="headerUp__before">
            <Link to="/login">
              <button type="submit" className="headerUp__before--login">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button type="submit" className="headerUp__before--register">
                Register
              </button>
            </Link>
          </div>
        );
      }
    };

    return (
      <header>
        <div className="headerUp">
          <div className="headerUp__logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="headerUp__search">
            <input type="text" placeholder="Cari produk" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          {navLink()}
        </div>

        <Popup
          trigger={
            <div className="headerMid">
              <h4>Free Delivery</h4>
              <p>
                Applies to orders of Rp. 3.000.000,- or more.
                <strong> View details.</strong>
              </p>
            </div>
          }
          modal
        >
          {(close) => (
            <div className="popup">
              <h3>
                GET IDR 50.000,- OFF + FREE DELIVERY With minimum purchase of
                IDR 3.000.000,-
              </h3>
              <h6>
                tnc: Valid until 13 April on regular priced items only at
                ID.BOGO.COM. Discount is valid on the lowest priced item and
                reduction will be applied automatically at checkout.
              </h6>
              <button className="close" onClick={close}>
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
          )}
        </Popup>

        <div className="headerBot">
          <ul className="cate">
            <li className="men">
              <Popup
                className="menu-custom"
                trigger={<span>MEN</span>}
                position="bottom left"
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={150}
                mouseEnterDelay={150}
                contentStyle={{
                  padding: "0px",
                  border: "none",
                  marginTop: "15px",
                }}
                arrow={false}
              >
                {" "}
                <ul className="mendrop">
                  <Link to="/category/men-sweater">Sweater</Link>
                  <Link to="/category/men-pants">Pants</Link>
                  <Link to="/category/men-tshirt">T-Shirt</Link>
                  <Link to="/category/men-watch">Watch</Link>
                </ul>
              </Popup>
            </li>

            <li className="wom">
              <Popup
                className="menu-custom"
                trigger={<span>WOMEN</span>}
                position="bottom left"
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={150}
                mouseEnterDelay={150}
                contentStyle={{
                  padding: "0px",
                  border: "none",
                  marginTop: "15px",
                }}
                arrow={false}
              >
                {" "}
                <ul className="mendrop">
                  <Link to="/category/women-sandals">Sandals</Link>
                  <Link to="/category/women-shirts">Shirts</Link>
                  <Link to="/category/women-tshirts">T-Shirts</Link>
                  <Link to="/category/women-pants">Pants</Link>
                  <Link to="/category/women-sweater">Sweater</Link>
                </ul>
              </Popup>
            </li>
            <Link to="/category/all-sale">
              <li>SALE</li>
            </Link>
            {/* <Link to="/Sale">Sale</Link> */}
            <li className="shoes">
              <Popup
                className="menu-custom"
                trigger={<span>SHOES</span>}
                position="bottom left"
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={150}
                mouseEnterDelay={150}
                contentStyle={{
                  padding: "0px",
                  border: "none",
                  marginTop: "15px",
                }}
                arrow={false}
              >
                {" "}
                <ul id="unique">
                  <Link to="/category/shoes-sneakers">Sneakers</Link>
                  <Link to="/category/shoes-boots">Boots</Link>
                </ul>
              </Popup>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
