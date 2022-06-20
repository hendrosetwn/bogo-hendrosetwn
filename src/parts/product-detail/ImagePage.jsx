import React, { Component } from "react";
import DetailsThumb from "./Thumb";

class ImagePage extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { index } = this.state;

    return (
      <div className="product-detail-first">
        <div className="product-detail-first__details">
          <div className="product-detail-first__details--big-img">
            <img
              src={require(`../../assets/images/${this.props.images[index]}`)}
              alt={`${this.props.images[index]}`}
            />
          </div>

          <div className="product-detail-first__details--box">
            <DetailsThumb
              images={this.props.images}
              tab={this.handleTab}
              myRef={this.myRef}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImagePage;
