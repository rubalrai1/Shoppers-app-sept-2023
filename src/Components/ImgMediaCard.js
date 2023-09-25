// import React, {useEffect, useState} from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import axios from 'axios'
// import IconButton from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';

// const baseURL = "https://fakestoreapi.com/products";

// export default function ImgMediaCard({image, title,category, price}) {
// const [apiData, setApiData] =useState(null);
// useEffect(()=>{
//   axios.get(baseURL).then((response) => {
//     //console.log(response.data,'rubalhello')
//     setApiData(response.data);
//   });
// },[]);

// console.log(apiData, 'rubalApi')

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="alt-img"
//         height="100"
//         image={image}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//          {category}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">{ `$${price}`}</Button>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton><Button size="small">Add to cart</Button>
//       </CardActions>
//     </Card>
//   );
// }

import React from 'react'
import './imgMediaCard.css'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

export default function ImgMediaCard({image, title,category, price}) {
    return (
        <div className="card">
            <div className="wrapper">
                <div className="card_img">
                  {/* <img src={image} alt="alt" className="card-image"/> */}
                  <div className="card-image" style={{backgroundImage: `url(${image})`, backgroundSize:"cover"}}>
        </div>
                </div>
                <div className="cardInfo">
                    <h4>{category}</h4>
                    <div className="action">
                            <div className="priceGroup">{ `$${price}`}
                        </div>
                          <IconButton className="wishlist" aria-label="add to wishlist" onClick={()=>alert("Added to wishlist")}>
                          <FavoriteIcon />
                          </IconButton>
                        <IconButton className="add-to-cart" aria-label="add to cart" onClick={()=>alert("Added to cart")}>
                          <ShoppingCartTwoToneIcon />
                          </IconButton>

                    </div>
                </div>
            </div>
        </div>
    )
}