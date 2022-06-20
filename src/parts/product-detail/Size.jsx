import React from 'react';

const Size = (props) => {
  return (
    <>
        {props.size.map((size, index) => (
          <div className="thumb" key={index}>
            <input
              type="radio"
              name="size"
              defaultValue={size}
              id={`size-${index}`}
              onChange={props.handleSize}
            />
            <label htmlFor={`size-${index}`}>{size}</label>
          </div>
        ))}
      </>
  );
}

export default Size;

