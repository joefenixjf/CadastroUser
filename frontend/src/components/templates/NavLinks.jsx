import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks(props) {  
  return (
      <Link to={props.link}>
        <i className={props.icon}></i>{props.content}
      </Link>
  )
} 