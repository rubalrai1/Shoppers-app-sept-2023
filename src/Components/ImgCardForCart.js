import React from 'react'
import './imgMediaCard.css'

export default function ImgCardForCart({image, title,category, price}) {
    return (
        <div className="card">
            <div className="wrapper">
                <div className="card_img">
                  <div className="card-image" style={{backgroundImage: `url(${image})`, backgroundSize:"cover"}}>
        </div>
                </div>
                <div className="cardInfo">
                    <h4>{category}</h4>
                    <div className="action">
                            <div className="priceGroup">{ `$${price}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}