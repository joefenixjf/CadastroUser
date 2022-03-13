import "./Nav.css";
import React from "react";
import NavLinks from "./NavLinks";

export default props => 
  <aside className="menu-area">
    <nav className="menu">
      <NavLinks content="Início" icon="fa fa-home" link="/"/>
      <NavLinks content="Usuários" icon="fa fa-users" link="/users"/>
    </nav>
  </aside>