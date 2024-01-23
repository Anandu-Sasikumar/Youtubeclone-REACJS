import React from "react";
import "./Header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <FaBars className="header-menu" size={26} />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        className="header-logo"
      ></img>
      

      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header-icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"></img>
      </div>
    </div>
  );
};

export default Header;
