// deals
import React, { useEffect, useState } from "react";

function SavedDeals({ selectedUser }) {
    const [savedGames, setSavedGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/deals")
        .then((response) => response.json())
        .then((data) => {
            setSavedGames(data);
        });
    }, []);

    const handlePurchase = (
        title,
        price,
        thumb,
        gamelink,
        rating,
        original_price,
        selectedUser,
        id
    ) => {
        fetch("http://localhost:9292/purchases", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            price: price,
            thumb: thumb,
            gamelink: gamelink,
            rating: rating,
            original_price: original_price,
            user_id: selectedUser,
        }),
        });
    
       
        openSteamTab(gamelink, id)
        
        
    };

    const openSteamTab = (gamelink, id) => {
        window.open(gamelink,'_blank')
        handleDeleteGame(id);
    }
    
    
    const removeGameFromState = (id) => {
        const filteredGames = savedGames.filter(game => {
            return game.id !== id
        })
        setSavedGames(filteredGames)
    }

    const handleDeleteGame = (id) => {
        fetch(`http://localhost:9292/deals/${id}`, {
            method: 'DELETE'
        })
        .then(removeGameFromState(id))
    }

    const gameRating = (eachGame) => {
        if (eachGame.rating == 0) {
        return <p>Rating: None</p>
        } else {
        return <p id="rating">Rating: {eachGame.rating}%</p>
        }
    };

    const renderSavedData = () => {
        if (!!savedGames) {
        return savedGames.map((eachGame) => {
            if (eachGame.user_id === selectedUser)
            return (
                <div className="game-container">
                <div className="container" key={eachGame.thumb}>
                    <div className="row">
                    <div className="col-md-3">
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
                                <p>Regular Price $ {eachGame.original_price}</p>
                            </span>
                            <span className="sale-price">
                                <p>Sales Price $ {eachGame.price}</p>
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
                                    eachGame.price,
                                    eachGame.thumb,
                                    eachGame.gamelink,
                                    eachGame.rating,
                                    eachGame.original_price,
                                    selectedUser,
                                    eachGame.id
                                )
                                }
                                className="btn btn-xs btn-outline btn-primary"
                                >
                                Buy<i className="fa fa-long-arrow-right"></i>{" "}
                                </button>
                                <button
                                onClick={() => handleDeleteGame(eachGame.id)}
                                className="btn btn-xs btn-outline btn-primary"
                                >
                                Delete<i className="fa fa-long-arrow-right"></i>{" "}
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
        {renderSavedData()}
        </div>
    );
}

export default SavedDeals;
