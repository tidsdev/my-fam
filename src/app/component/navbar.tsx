"use client";
import React, { useState } from "react";
import "/001_ThisIsWork/my-fam/src/app/navbar.css";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar z-10">
      <div className="navbar__logo">MY FAMILY</div>
      <button
        className="navbar__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className="navbar__hamburger"></span>
        <span className="navbar__hamburger"></span>
        <span className="navbar__hamburger"></span>
      </button>
      <div className={`navbar__links${open ? " navbar__links--open" : ""} justify-center`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;