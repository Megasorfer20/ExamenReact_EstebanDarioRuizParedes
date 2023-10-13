import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";
import axios from "axios";
import "./HeaderProducts.css";

function HeaderProducts() {
  /*const [defineCategories, setDefineCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/producto',{
      headers: {
        "Accept-Version": "1.0.0",
      }}).then((result =>{
        console.log(result.data.data);
        setDefineCategories(result.data.data)
      }))
  }, []);*/

const responsiveFucntion = () => {

}

  return (
    <div className="topnav" id="myTopnav">
      <Link to="/">Home</Link>
      <Link to="/">News</Link>
      <Link to="/">Contact</Link>
      <Link to="/">About</Link>
      <Link to="/">
        <i className="fa fa-bars"></i>
      </Link>
    </div>
  );
}

export default HeaderProducts;
