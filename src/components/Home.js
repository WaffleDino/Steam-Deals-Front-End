import React from "react";

function Home({ data }) {
    const renderData = () => {
        if (!!data) {
        return data.map((eachGame) => {
            return (
            <div className="game-container">
                <div className="container">
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
                            <a
                                href="#"
                                className="btn btn-xs btn-outline btn-primary"
                            >
                                Buy<i className="fa fa-long-arrow-right"></i>{" "}
                            </a>
                            <a
                                href="#"
                                className="btn btn-xs btn-outline btn-primary"
                            >
                                Wishlist<i className="fa fa-long-arrow-right"></i>{" "}
                            </a>
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


