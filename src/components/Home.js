import React from "react";
import {useEffect, useState} from "react";

function Home({ data }) {

const [saveThisGame, setSaveThisGame] = useState({
    title: "",
    price: 0,
    thumb: ""
})

const handleSaveDeal = (title, price, thumb, gameID, rating, original_price, event) => {
     

    console.log(event)
    fetch("http://localhost:9292/deals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            price: price,
            thumb: thumb,
            gamelink: `https://www.cheapshark.com/redirect?dealID=${gameID}`,
            rating: rating,
            original_price: original_price

        })
    } )
}

    const renderData = () => {
        if (!!data) {
        return data.map((eachGame) => {
            return (
            <div className="game-container">
                <div className="container" key={eachGame.thumb}>
                <div className="row">
                    <div className="col-md-3">
                    <div className="ibox">
                        <div className="ibox-content product-box">
                        <div className="product-imitation">
                            <img className="game-thumb" alt="game-thumb" src={eachGame.thumb} />
                        </div>
                        <div className="product-desc">
                            <span className="regular-price">
                            <p>
                                Regular Price $ {eachGame.normalPrice}
                            </p>
                            </span>
                            <span className="sale-price" >
                            <p>
                                Sales Price $ {eachGame.salePrice}
                            </p>
                            </span>
                            <h4>{eachGame.title}</h4>
                            <div className="small m-t-xs">
                            <p id="rating">
                                Rating: {eachGame.steamRatingPercent}%
                            </p>
                            </div>
                            <div className="m-t text-righ">
                            <button
                                href="#"
                                className="btn btn-xs btn-outline btn-primary"
                            > 
                                Buy<i className="fa fa-long-arrow-right"></i>{" "}
                            </button>
                            <button
                                onClick={ () => handleSaveDeal(eachGame.title, eachGame.salePrice, eachGame.thumb, eachGame.dealID, eachGame.steamRatingPercent, eachGame.normalPrice)}
                                className="btn btn-xs btn-outline btn-primary"
                            >
                                Wishlist<i className="fa fa-long-arrow-right"></i>{" "}
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            );
        });
        }
    };

    return (
        <div>
        <p>Home</p>
        {renderData()}
        </div>
    );
}

export default Home;


