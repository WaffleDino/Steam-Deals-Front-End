import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from "./Home"
import NavBar from "./NavBar"
import Purchases from "./Purchases"
import Wishlist from "./Wishlist"

function App() {
  const [data, setData] = useState([])

  // fetch URL-API
  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then(r => r.json())
    .then(json => setData(json))
  }, [])

  console.log(data)

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Purchases">
          <Purchases />
        </Route>
        <Route exact path="/Wishlist">
          <Wishlist />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
