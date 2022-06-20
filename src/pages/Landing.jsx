import React from "react";
import "../assets/scss/Landing.scss";
import CardLimitedOffers from "../parts/CardLimitedOffers";
import CardTrendLatest from "../parts/CardTrendLatest";
import {
  getHottest,
  getLimitedOffers,
  getTrending,
} from "../services/DataFilterCategory";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="ban">
          <div className="a">
            <Carousel
              showIndicators={false}
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              autoPlay
              interval={3000}
              infiniteLoop
            >
              <div>
                <img alt="0" src={require("../assets/images/landingnike1.webp")} />
              </div>
              <div>
                <img alt="0" src={require("../assets/images/landingnike2.webp")} />
              </div>
              <div>
                <img alt="0" src={require("../assets/images/landingnike3.webp")} />
              </div>
              <div>
                <img alt="0" src={require("../assets/images/hero4.webp")} />
              </div>
              <div>
                <img alt="0" src={require("../assets/images/hero5.webp")} />
              </div>
              <div>
                <img alt="0" src={require("../assets/images/hero6.webp")} />
              </div>
              <div>
                <img alt="0" src={require("../assets/images/hero7.webp")} />
              </div>
              <div>
                <img alt="0" src={require("../assets/images/hero8.webp")} />
              </div>
            </Carousel>
          </div>
          <div className="b"></div>
          <div className="c"></div>
        </div>

        <div className="descBan">
          <h1>ICON CLASH COLLECTION</h1>
          <p>
            The all-over print on the sports bra, training tank and leggings has
            that cut-up collage 90’s vibe, drawing inspiration from one of our
            favorite eras — a reminder of where we’ve been, and better yet,
            where we’re headed.
          </p>
          <button id="shop">
            <Link to="/category/icon-class">Shop</Link>
          </button>
        </div>

        <div className="trending">
          <h4>Trending</h4>

          <div className="prodTR">
            {getTrending.map((e) => (
              <CardTrendLatest
                key={e.id}
                serie={e.title}
                price={e.price}
                keywords={e.keywords}
                slug={e.slug}
                image={require("../assets/images/" + e.images[0])}
              />
            ))}
          </div>
        </div>

        <div className="the-latest">
          <h4>The Latest</h4>
          <i className="fa-brands fa-hotjar"></i>
          <div className="prodTL">
            {getHottest.map((e) => (
              <CardTrendLatest
                key={e.id}
                price={e.price}
                serie={e.title}
                keywords={e.keywords}
                slug={e.slug}
                image={require("../assets/images/" + e.images[0])}
              />
            ))}
          </div>
        </div>

        <div className="limited">
          <h4>Limited Offers</h4>
          <div className="prodlim">
            {getLimitedOffers.map((e) => (
              <CardLimitedOffers
                key={e.id}
                serie={e.title}
                oldpri={e.oldPrice}
                newpri={e.price}
                keywords={e.keywords}
                slug={e.slug}
                image={require("../assets/images/" + e.images[0])}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
