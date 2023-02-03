import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newLinks = links.Map( (link, index)=>{
    return(
    <a href="#home" key = {index}>{link}</a>)
  })

  return <nav>{{newLinks}}</nav>;
}

export default NavBar;


