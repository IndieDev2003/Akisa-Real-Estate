import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-3 sm:px-20 h-[10vh]">
      <NavLink to={"/"}>
        <img src={logo} className="h-7" alt="" />
      </NavLink>
      <div className="hidden md:flex gap-8">
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/explore"}>
          <p>Explore</p>
        </NavLink>
        <NavLink to={'/agency'}><p>Agency</p></NavLink>
        <p>Blog</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div>
        <button className="rounded-lg px-6 py-2 text-white bg-orange-600">
          Add Listing
        </button>
      </div>
    </header>
  );
}

export default Navbar;
