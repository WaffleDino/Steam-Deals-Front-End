import React, {useState, useEffect} from "react";
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

function NavBar() {

    const[users, setUsers] = useState([])
    const[selectedUser, setSelectedUser] = useState({
        id:0
    })


    const saveSelectedUser = (event) => {
        setSelectedUser({...selectedUser, [event.target.id]: event.target.value})
        console.log(event.target.value)
    }

    useEffect (() => {
        fetch("http://localhost:9292/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        })
    }, [])

    const renderUser = () => {
        if (!!users) {
        return users.map((eachUser) => {
            return (
           <option value={eachUser.id}>{eachUser.name}</option>
    )})}}

  return (
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
            <option value="" disabled selected>Select User</option>
            {renderUser()}
            </select>
    </div>
  );
}

export default NavBar;
