// deals
import React, { useEffect, useState } from 'react';

function Wishlist(){

const [savedGames, setSavedGames] = useState([])

useEffect (() => {
    fetch("http://localhost:9292/deals")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setSavedGames(data)
    })
}, [])

    const renderSavedData = () => {
        if (!!savedGames) {
        return savedGames.map((eachGame) => {
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
                                Regular Price $ {eachGame.original_price}
                            </p>
                            </span>
                            <span className="sale-price" >
                            <p>
                                Sales Price $ {eachGame.price}
                            </p>
                            </span>
                            <h4>{eachGame.title}</h4>
                            <div className="small m-t-xs">
                            <p id="rating">
                                Rating: {eachGame.rating}%
                            </p>
                            </div>
                            <div className="m-t text-righ">
                            <button
                                href="#"
                                className="btn btn-xs btn-outline btn-primary"
                            > 
                                Buy<i className="fa fa-long-arrow-right"></i>{" "}
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
        {renderSavedData()}
        </div>
    );

}

export default Wishlist