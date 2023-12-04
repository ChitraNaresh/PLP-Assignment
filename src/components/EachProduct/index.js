import React from "react";
import "./index.css";

const EachProduct = ({ eachItem, noColumns, searchInput }) => {
  const { product_badge, product_image, product_title, product_variants } =
    eachItem;
    const returnBgColour=(value,index)=>{
      if (searchInput){
        return (value[`v${index + 1}`].toLowerCase()).includes(searchInput.toLowerCase()) && "special-green-bg"
      }return ""
     
    }
  return (
    <div
      className={`each-item-card ${
        noColumns === "two" ? "each-item-card-column" : ""
      }`}
    >
      <div className="top-btn-card">
      <button type="button" className={`product-badge ${noColumns === "two" ? "btn-with-two-columns" : ""}`}>
          {product_badge}
        </button>
        </div>
      <div className="image-card">
        <img src={product_image} className={`cap ${noColumns === "two" ? "cap-for-two-column" : ""}`} />
      </div>
      <div className="product-details">
        <h4 className="product-title">{product_title}</h4>
        {product_variants.map((variant, i) => {
          return (
            <p
              className={`variant ${noColumns==="two"&&"variant-two-column-bg"} ${
               returnBgColour(variant,i)
              } `}
            >
              {variant[`v${i + 1}`]}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default EachProduct;
