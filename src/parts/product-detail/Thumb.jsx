import React from "react";

const DetailsThumb = (props) => {
  const { tab, myRef } = props;

  return (
    <div className="thumb" ref={myRef}>
      {props.images.map((img, index) => (
        <img
          src={require(`../../assets/images/${img}`)}
          alt={`${img}`}
          key={index}
          onClick={() => tab(index)}
        />
      ))}
    </div>
  );
};

export default DetailsThumb;
