import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
 
  return (
    <header className="header">
      <nav className="container flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          Space
        </a>
        <div className="header__links hide-for-mobile">
          <a href="#">Home</a>

          <a href="#">Templates</a>

          <a href="#">Price</a>

          <a href="#">Help</a>

          <button type="button" className="button header__button ">
            <a>Get In Touch</a>
          </button>

        </div>
          <AiOutlineMenu className="hide-for-desktop" onClick={() => setShowMenu(!showMenu)}> {showMenu ? "Close" : "Open"}</AiOutlineMenu>
      </nav>
      <div class={`header__hamburger-menu ${showMenu && "active-menu"} hide-for-desktop`}>
        <a href="">Home</a>
        <a href="">Templates</a>
        <a href="">Price</a>
        <a href="">Help</a>
      </div>
      
    </header>
  );
};

export default Header;
