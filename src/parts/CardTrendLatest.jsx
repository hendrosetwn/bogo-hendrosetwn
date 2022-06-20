import React from "react";
import "../assets/scss/CardTrendLatest.scss";
import { Link } from "react-router-dom";
import { numberFormat } from "../services/NumberFormat";

function CardTrendLatest(props) {

  return (
    <div className="T-L">
      <img src={props.image} alt={props.slug} />
      <Link to={`/products/${props.keywords}/${props.slug}`}>See Detail</Link>
      <div className="T-L-Pri">
        <h5>{props.serie}</h5>
        <h6>
          {numberFormat(props.price)}
        </h6>
      </div>
    </div>
  );
}

export default CardTrendLatest;
