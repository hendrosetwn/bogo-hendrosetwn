import React, { Component } from "react";

class Description extends Component {
  handlePlus = (e) => {
    const plus = e.target;
    plus.setAttribute("style", "display:none;");

    const minus = e.target.nextElementSibling;
    minus.removeAttribute("style");

    const desc = e.target.nextElementSibling.nextElementSibling;
    desc.removeAttribute("style");
  };

  handleMinus = (e) => {
    const minus = e.target;
    minus.setAttribute("style", "display:none");

    const plus = e.target.previousElementSibling;
    plus.removeAttribute("style");

    const desc = e.target.nextElementSibling;
    desc.setAttribute("style", "display:none");
  };

  render() {
    return (
      <div className="product-detail-second__description">
        <button
          type="button"
          className="product-detail-second__description--button plus"
          onClick={this.handlePlus}
        >
          Read Description {this.props.title}
          <i
            id="plus"
            className="bi bi-plus-lg product-detail-second__description--button--plus"
          ></i>
        </button>
        <button
          type="button"
          className="product-detail-second__description--button minus"
          onClick={this.handleMinus}
          style={{ display: "none" }}
        >
          {this.props.title} Description
          <i
            id="minus"
            className="bi bi-dash-lg product-detail-second__description--button--minus"
          ></i>
        </button>
        <p
          className="product-detail-second__description--button--text"
          style={{ display: "none" }}
        >
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default Description;

// harus ada beberapa kata yang terlihat...