import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Purchases from "./Purchases";
import SavedDeals from "./SavedDeals";
import { NavLink } from "react-router-dom";


    

const linkStyles = {
  padding: "10px 20px 10px 20px",
  margin: "10px 10px 10px 10px",
  background: "#f1d302",
  textDecoration: "none",
  color: "white",
  justifyContent: "center",
  textAlign: "center",
  borderRadius: "8px",
};

function App() {
  
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);

  const saveSelectedUser = (event) => {
    setSelectedUser(parseInt(event.target.value));
  };

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(users);
      });
  }, []);

  const renderUser = () => {
    if (!!users) {
      return users.map((eachUser) => {
        return <option value={eachUser.id}>{eachUser.name}</option>;
      });
    }
  };

  // fetch URL-API
  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((r) => r.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <div className="nav-bar">
        <NavLink
          to="/"
          exact
          style={linkStyles}
          className="nav-bar-route"
          activeStyle={{
            background: "#235789",
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/Purchases"
          exact
          style={linkStyles}
          className="nav-bar-route"
          activeStyle={{
            background: "#235789",
          }}
        >
          Purchases
        </NavLink>

        <NavLink
          to="/SavedDeals"
          exact
          style={linkStyles}
          className="nav-bar-route"
          activeStyle={{
            background: "#235789",
          }}
        >
          Saved Deals
        </NavLink>
        <select onChange={saveSelectedUser}>
          <option value="" disabled selected>
            Select User
          </option>
          {renderUser()}
        </select>
      </div>

      <Switch>
        <Route exact path="/">
          <Home data={data} selectedUser={selectedUser} />
        </Route>
        <Route exact path="/Purchases">
          <Purchases selectedUser={selectedUser} />
        </Route>
        <Route exact path="/SavedDeals">
          <SavedDeals selectedUser={selectedUser} />
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
