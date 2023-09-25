import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "./context/DataStorage";
import "./ProductDetails.css";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Navbar from "../Navbar"

function ProductDetails() {
  const { apiData } = useContext(ApiContext);
  const { productId } = useParams();
  const id = parseInt(productId);
const thisProduct =
    apiData &&
    apiData.find((data) => data.id === id);
  console.log(apiData, "Shubham api")
  console.log(thisProduct, 'Shubham this prodt')

  return (
    <>
    <Navbar/>
        { 
        thisProduct &&
        <div className="product-card">
            <div className="card-wrapper">
                {/* <div className="product-card_img"> */}
                  {/* <img src={image} alt="alt" className="card-image"/> */}
                  <div className="product-card-image" style={{backgroundImage: `url(${thisProduct.image})`, backgroundSize:"cover"}}>
        </div>
                {/* </div> */}
            <div className="product-description">{thisProduct.description}</div>
                <div className="product-cardInfo">
                    <h4>{thisProduct.category}</h4>
                    <div className="action">
                            <div className="priceGroup">{ `$${thisProduct.price}`}
                        </div>
                          <IconButton className= "wishlist" aria-label="add to wishlist" onClick={()=>alert("Added to wishlist")}>
                          <FavoriteIcon />
                          </IconButton>
                        <IconButton className ="add-to-cart" aria-label="add to cart" onClick={()=>alert("Added to cart")}>
                          <ShoppingCartTwoToneIcon />
                          </IconButton>

                    </div>
                </div>
            </div>
        </div>
        }
    </>
  );
}

export default ProductDetails;
