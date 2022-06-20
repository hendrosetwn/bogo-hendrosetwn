import "../assets/scss/LimitedOffers.scss";
import React from "react";
import { Link } from "react-router-dom";
import { numberFormat } from "../services/NumberFormat";

function LimitedOffers(props) {
  
  return (
    <div className="lm">
      <img src={props.image} alt={props.slug} />
      <Link to={`/products/${props.keywords}/${props.slug}`}>See Detail</Link>
      <div className="limPr">
        <h6>{props.serie}</h6>
        <h6>
          {numberFormat(props.oldpri)}
        </h6>
        <h6>
          {numberFormat(props.newpri)}
        </h6>
      </div>
    </div>
  );
}

export default LimitedOffers;
