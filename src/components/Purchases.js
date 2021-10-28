// users deals
import React, { useEffect, useState } from 'react';

function Purchases({selectedUser}){
    const [purchases, setPurchases] = useState([])

    useEffect (() => {
        fetch("http://localhost:9292/purchases")
        .then(response => response.json())
        .then(data => {
            setPurchases(data)
        })
    }, [])
    
    const renderPurchases = () => {
        if (!!purchases) {
        return purchases.map((eachGame) => {
            if (eachGame.user_id === selectedUser)
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
                            <span className="sale-price" >
                            <p>
                                You paid: $ {eachGame.price}
                            </p>
                            </span>
                            <h4>{eachGame.title}</h4>
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
        {renderPurchases()}
        </div>
    );

}

export default Purchases