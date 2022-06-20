import "../assets/scss/Footer.scss";
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer__up">
          <div className="menu">
            <div className="find">
              <h4>FIND A STORE</h4>
              <p>BECOME A MEMBER</p>
              <p>SIGN UP FOR EMAIL</p>
            </div>

            <div className="help">
              <h4>GET HELP</h4>
              <p>Order status</p>
              <p>Delivery</p>
            </div>

            <div className="about">
              <h4>ABOUT BOGO</h4>
              <p>News</p>
              <p>Careers</p>
            </div>
          </div>

          <div className="social">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-square"></i>
          </div>
        </div>

        <div className="footer__down">
          <div className="loc">
            <i className="fa-solid fa-location-dot"></i>
            <p>© 2022 Bogo, Inc. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
