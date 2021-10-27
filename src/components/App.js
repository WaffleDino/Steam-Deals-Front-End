import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from "./Home"
import NavBar from "./NavBar"
import Purchases from "./Purchases"
import SavedDeals from "./SavedDeals"

function App() {
  const [data, setData] = useState([])

  const [currentUser, setCurrentUser] = useState([])

  // fetch URL-API
  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then(r => r.json())
    .then(json => setData(json))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home data={data}/>
        </Route>
        <Route exact path="/Purchases">
          <Purchases />
        </Route>
        <Route exact path="/SavedDeals">
          <SavedDeals />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// filter with price
// dropdown to display the number of games
// style cards
// get bootstrap working