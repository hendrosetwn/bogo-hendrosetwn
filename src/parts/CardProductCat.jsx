import React from 'react';
import '../assets/scss/CardProductCat.scss';
import { Link } from 'react-router-dom';
import { numberFormat } from '../services/NumberFormat';

function CardProductCat(props) {
  return (
    <li className='each'>
      <div className='logo'>
        <img src={props.image} alt={props.slug} />
        <Link to={`/products/${props.keywords}/${props.slug}`}>See Detail</Link>
      </div>

      <div className='desc'>
        <h5>{props.serie}</h5>
        {props.oldPrc ? <h6 className='oldprice'>{numberFormat(props.oldPrc)}</h6> : ''}
        <h6>{numberFormat(props.prc)}</h6>
      </div>
    </li>
  );
}

export default CardProductCat;
