import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__start">
          <Avatar
            alt="Amaan Shaikh"
            src="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83639244_187705492295818_9221091469350141952_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=ma5Yw1PI8_IAX-b1V4F&_nc_tp=25&oh=212594a42db841ea827f21820a06e443&oe=5FDBE121"
          />
          <p>amaaan_56</p>
        </div>
        <div className="post__header__end">
          <MoreHorizIcon />
        </div>
      </div>
      <img
        src="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/125885810_291810525441646_6257595315602442671_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=dToekk0ZdFwAX8y9_HW&tp=19&oh=306589a142bcbe47dd8335201e6a60ab&oe=5FE05D0C"
        alt="Instagram Image"
      />
      <div className="post__footer">
        <div className="post__footer__icons">
          <div className="post__footer__icons__left">
            <FavoriteBorderIcon />
            <ChatBubbleOutlineIcon />
            <ShareIcon />
          </div>
          <div className="post__footer__icons__right">
            <BookmarkBorderIcon />
          </div>
        </div>
        <div className="post__footer_likeSection">
          <Avatar
            className={classes.small}
            alt="Amaan Shaikh"
            src="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83639244_187705492295818_9221091469350141952_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=ma5Yw1PI8_IAX-b1V4F&_nc_tp=25&oh=212594a42db841ea827f21820a06e443&oe=5FDBE121"
          />
          <div style={{ fontSize: '14px', margin: '10px' }}>
            Liked By <span style={{ fontWeight: 500 }}>akshata_pathare </span>
            and <span style={{ fontWeight: 500 }}>441 others</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
