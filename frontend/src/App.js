import { BrowserRouter as Router, Route, Routes, Link, Switch } from "react-router-dom";
import './App.css';
import HeaderProducts from './components/header/HeaderProducts';
import { useEffect, useState } from 'react';
import Products from "./components/products/Products";

function App() {

const [carroCOmprasData,setCarroComprasData] = useState([])



  return (
    <div className="App">
      <Router>

        <HeaderProducts />

        <Switch>
          <Route exact path="/">
            <center>
            <Products/>
            </center>
          </Route>
          <Route path="/compras">

          </Route>
          <Route path="/ventas">
          </Route>
          <Route path="/reparaciones">

          </Route>
          <Route path="/productos">

          </Route>
          <Route path="/sedes">
          </Route>
          <Route path="/proveedores">
          </Route>
          <Route path="/clientes">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
