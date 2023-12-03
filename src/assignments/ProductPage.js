import { useEffect, useState } from "react";

import Item from "./Item";
import products from "./ProductPage";

const ProductPage = () => {

    const [allProducts, setAllProducts] = useState(products);
    const [categoriesall, setCategoriesall] = useState([]);
  
    const fetchCategories = () => {
  
      allProducts.map(prod => {
  
        let newAllCategories = categoriesall;
  
        if (newAllCategories.includes(prod.category)) {
          console.log("exists");
        } else {
          newAllCategories.push(prod.category);
        }
  
  
        setCategoriesall(newAllCategories)
  
        
      })
      
      
    };
    // eslint-disable-next-line
  
    
    useEffect(() => {
      fetchCategories()
    });
  
    const filterProduct = (e) => {
      const productname = e;
      setAllProducts(
        products.filter((product) => product.category === productname)
      );
    };


  return (
   <>
         <h1>My Products</h1>

<div className="categories">
  <h3>All categories</h3>

  <select
    onChange={(e) => filterProduct(e.target.value)}
    style={{ width: "90%", padding: "10px", fontSize: "1.1rem" }}
  >

    <option disabled selected>
      Select Category
    </option>


    {categoriesall && categoriesall.map((category, index) => (
        <option value={category} key={index}>
          {category.toUpperCase()}
        </option>
      ))}

  </select>


</div>




<h2>Category : {allProducts.length === products.length ? "All" : allProducts[0].category}</h2>

<div
  className="products"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    margin: "1rem auto",
    flexWrap: "wrap",
  }}
>

  {allProducts.map((product) => (
    <Item
      key={product.id}
      title={product.title}
      pic={product.images[0]}
      price={product.price}
      stock={product.stock}
      brand={product.brand}
      category={product.category}
      description={product.description}
    />
  ))}

</div>
   
   </>
  )
}

export default ProductPage