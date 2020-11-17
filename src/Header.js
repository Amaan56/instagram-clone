import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import NavigationIcon from '@material-ui/icons/Navigation';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className="header">
      <div className="header__container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
        <div className="header__input">
          <div className="header_no_input">
            <SearchIcon className="search__icon" />
            <span className="search_text">Search</span>
          </div>
          {/* <input type="text" placeholder="Search" /> */}
        </div>
        <div className="header__icons">
          <HomeIcon className="header__icon" />
          <InboxIcon className="header__icon" />
          <NavigationIcon className="header__icon" />
          <FavoriteBorderIcon className="header__icon" />
          <Avatar
            className={classes.small}
            alt="Amaan Shaikh"
            src="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83639244_187705492295818_9221091469350141952_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=ma5Yw1PI8_IAX-b1V4F&_nc_tp=25&oh=212594a42db841ea827f21820a06e443&oe=5FDBE121"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
