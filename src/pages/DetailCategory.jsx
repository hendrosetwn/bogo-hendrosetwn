import React from "react";
import "../assets/scss/DetailCategory.scss";
import CardProductCat from "../parts/CardProductCat";

class DetailCategory extends React.Component {
  render() {
    return (
      <div className="DetailCategory">
        <h2>{this.props.gender}</h2>
        <h4>{this.props.product}</h4>
        <ul className="ProdCategory">
          {this.props.data.slice(0, 6).map((e) => (
            <CardProductCat
              key={e.id}
              serie={e.title}
              prc={e.price}
              oldPrc={e.oldPrice}
              keywords={e.keywords}
              slug={e.slug}
              image={require("../assets/images/" + e.images[0])}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default DetailCategory;
