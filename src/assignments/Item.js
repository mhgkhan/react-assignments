import React from "react";

const Item = ({ pic, title, price, stock, brand, category, description }) => {
  return (
    <div
      style={{
        width: "300px",
        margin: ".6rem",
        border: "1px solid gray",
        borderRadius: "6px",
      }}
    >
      <img src={pic} width={200} height={200} alt="this is im" />
      <h2>{title}</h2>
      <table border={1} style={{width:"100%"}}>
        <thead>
          <tr>
            <td>Price</td>
            <td>Stock</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{price}</td>
            <td>{stock}</td>
            <td>{brand}</td>
            <td>{category}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>{description.length<40? description : description.substring(0,40)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Item;
