import React from "react";

const CartSelect = (props) => {
  return (
    <div className="first__selectall">
      <div className="first__selectall--checkall">
        <input
          type="checkbox"
          id="selected-all"
          name="selected-all"
          defaultValue="all"
        />
        <label htmlFor="selected-all"> Selected All</label>
      </div>
      <div className="first__selectall--delete">
        <p onClick={props.handleDeleteAll}>
          Deleted Selected<i className="bi bi-trash"></i>
        </p>
      </div>
    </div>
  );
};

export default CartSelect;
