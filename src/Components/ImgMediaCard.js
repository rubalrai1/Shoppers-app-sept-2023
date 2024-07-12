import React, {useContext} from 'react'
import './imgMediaCard.css'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { WishlistContext } from './Pages/context/wishlist';
import { CartContext } from "./Pages/context/cart";
import { ApiContext } from "./Pages/context/DataStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function ImgMediaCard({id, image, title, category, price}) {
    const { apiData } = useContext(ApiContext);
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const { wishlistItems, addToWishlist } = useContext(WishlistContext);
    const thisProduct = apiData && apiData.find((data) => data.id === id);
    const notifyAddedToCart = (item) =>
    toast.success(`${item.title} added to cart!`);
    const notifyAddedToWishlist = () =>
    toast.success(`Added to Wishlist!`);

    return (
        <div className="card">
            <ToastContainer/>
            <div className="wrapper">
            <Link to={`/products/${thisProduct.id}`} aria-label="product-details">
                <div className="card_img">
                  <div className="card-image" style={{backgroundImage: `url(${image})`, backgroundSize:"cover"}}>
        </div>
                </div>
                </Link>
                <div className="cardInfo">
                    <h4>{category}</h4>
                    <div className="action">
                            <div className="priceGroup">{ `$${price}`}
                        </div>
                          <IconButton className="wishlist" aria-label="add to wishlist"  onClick={() => {
                      addToWishlist(thisProduct);
                      notifyAddedToWishlist();
                    }}>
                          <FavoriteIcon />
                          </IconButton>
                        <IconButton className="add-to-cart" aria-label="add to cart" onClick={()=>{
                            addToCart(thisProduct);
                            notifyAddedToCart(thisProduct);
                        }}>
                          <ShoppingCartTwoToneIcon />
                          </IconButton>

                    </div>
                </div>
            </div>
        </div>
    )
}