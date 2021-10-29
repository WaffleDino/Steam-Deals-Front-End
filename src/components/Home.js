import React from "react";
import {Alert} from 'react-alert'



function Home({ data, selectedUser }) {
    const handlePurchase = (
        title,
        price,
        thumb,
        gameID,
        rating,
        original_price,
        selectedUser
    ) => {
        if (selectedUser !== 0){
        console.log(selectedUser);
        fetch("http://localhost:9292/purchases", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            price: price,
            thumb: thumb,
            gamelink: `https://www.cheapshark.com/redirect?dealID=${gameID}`,
            rating: rating,
            original_price: original_price,
            user_id: selectedUser,
        }),
        });
        openSteamTab(gameID)
   }else{  alert("Select a user before purchasing!")  }

};

    const openSteamTab = (gameID) => {
        window.open(`https://www.cheapshark.com/redirect?dealID=${gameID}`,'_blank')
    }

    const handleSaveDeal = (
        title,
        price,
        thumb,
        gameID,
        rating,
        original_price,
        selectedUser
    ) => {
        if (selectedUser !== 0){
        fetch("http://localhost:9292/deals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            price: price,
            thumb: thumb,
            gamelink: `https://www.cheapshark.com/redirect?dealID=${gameID}`,
            rating: rating,
            original_price: original_price,
            user_id: selectedUser,
        }),
        });
    } 
    else{  alert("Select a user before saving a deal!")  }
};

    const gameRating = (eachGame) => {
        if (eachGame.steamRatingPercent == 0) {
        return <p>Rating: None</p>
        } else {
        return <p id="rating">Rating: {eachGame.steamRatingPercent}%</p>
        }
    };
    
    const renderData = () => {
        if (!!data) {
        return data.map((eachGame) => {
            return (
            <div className="game-container">
                <div className="container" key={eachGame.thumb}>
                <div className="row">
                    <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                    <div className="ibox">
                        <div className="ibox-content product-box">
                        <div className="product-imitation">
                            <img
                            className="game-thumb"
                            alt="game-thumb"
                            src={eachGame.thumb}
                            />
                        </div>
                        <div className="product-desc">
                            <span className="regular-price">
                            <p>Regular Price $ {eachGame.normalPrice}</p>
                            </span>
                            <span className="sale-price">
                            <p>Sales Price $ {eachGame.salePrice}</p>
                            </span>
                            <h4>{eachGame.title}</h4>
                            <div className="small m-t-xs">
                                {gameRating(eachGame)}
                            </div>
                            <div className="m-t text-righ">
                            <button
                                onClick={() =>
                                handlePurchase(
                                    eachGame.title,
                                    eachGame.salePrice,
                                    eachGame.thumb,
                                    eachGame.dealID,
                                    eachGame.steamRatingPercent,
                                    eachGame.normalPrice,
                                    selectedUser
                                )
                                }
                                className="button"
                            >
                                Buy<i className="fa fa-long-arrow-right"></i>{" "}
                            </button>
                            <button
                                onClick={() =>
                                handleSaveDeal(
                                    eachGame.title,
                                    eachGame.salePrice,
                                    eachGame.thumb,
                                    eachGame.dealID,
                                    eachGame.steamRatingPercent,
                                    eachGame.normalPrice,
                                    selectedUser
                                )
                                }
                                className="button-2"
                            >
                                Save Deal<i className="fa fa-long-arrow-right"></i>{" "}
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
        <div className="grid-container">
        {renderData()}
        </div>
    );
}

export default Home;
