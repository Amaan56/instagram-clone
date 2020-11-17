import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import NavigationIcon from '@material-ui/icons/Navigation';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
        <div className="header__input">
          <SearchIcon small fontSize="small" />
          <input type="text" />
        </div>
        <div className="header__icons">
          <HomeIcon />
          <InboxIcon />
          <NavigationIcon />
          <FavoriteBorderIcon />
          <Avatar
            fontSize="small"
            alt="Amaan Shaikh"
            src="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83639244_187705492295818_9221091469350141952_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=ma5Yw1PI8_IAX-b1V4F&_nc_tp=25&oh=212594a42db841ea827f21820a06e443&oe=5FDBE121"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
