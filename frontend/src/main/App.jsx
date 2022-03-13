import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Logo from "../components/templates/Logo";
// import Header from "../components/templates/Header";
import Nav from "../components/templates/Nav";
// import Home from "../components/home/Home";
import Footer from "../components/templates/Footer";
import Routes from "./Routes";

export default props => 
  <BrowserRouter>
  <div className="app">
    <Logo></Logo>
    <Nav></Nav>
    <Routes></Routes>
    <Footer></Footer>
  </div>
  </BrowserRouter>