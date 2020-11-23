import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Comments from './Comments';
import { useDataLayerValue } from './DataLayer';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function Post() {
  const [{ backdrop }, dispatch] = useDataLayerValue();
  const classes = useStyles();
  const captionContainer = React.createRef();
  const [captionHeight, setCaptionHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const lineHeight = 22;

  const [comments, setComments] = useState([
    { username: 'johncena', comment: "You can't see me", liked: false },
    { username: 'romanreigns', comment: 'This is my yard ', liked: true },
  ]);

  const [newCommentInput, setnewCommentInput] = useState('');
  const [postButtonDisabled, setpostButtonDisabled] = useState(true);

  const formElement = React.createRef();

  useEffect(() => {
    setCaptionHeight(captionContainer.current.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    if (captionHeight > lineHeight * 2) {
      setMaxHeight(lineHeight * 2);
    }
  }, [captionHeight]);

  useEffect(() => {
    if (newCommentInput === '') setpostButtonDisabled(true);
  }, [newCommentInput]);
  const changeLikeStatus = (i) => {
    let newArray = [...comments];

    newArray[i] = {
      ...newArray[i],
      liked: !newArray[i].liked,
    };

    setComments(newArray);
  };

  const addComments = (e) => {
    console.log('test');
    e.preventDefault();
    let newArray = [...comments];
    newArray.push({
      username: 'amaan__56',
      comment: newCommentInput,
      liked: false,
    });
    setnewCommentInput('');
    setComments(newArray);
  };
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
          <MoreHorizIcon
            onClick={() => {
              dispatch({
                type: 'SET_BACKDROP',
                backdrop: true,
              });
            }}
          />
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
        <div className="post__footer__likeSection">
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
        <div className="post__footer__caption">
          <span
            ref={captionContainer}
            className="post__footer__captionText"
            style={{ maxHeight: maxHeight > 0 ? `${maxHeight}px` : null }}
          >
            <span
              style={{
                fontWeight: 600,
                fontSize: '14px',
                display: 'inline',
                marginRight: '5px',
              }}
            >
              pratikgandhiofficial
            </span>
            At least 37 transgender and gender-nonconforming people have been
            killed this year, most of them Black and Brown transgender women.
            It’s intolerable. This Son Day of Remembrance, we honor their
            lives—and recommit to the work that remains to end this epidemic of
            violence. To transgender and gender-nonconforming people across
            America and around the world: from the moment I am sworn in as
            president, know that my administration will see you, listen to you,
            and fight for not only your safety but also the dignity and justice
            you have been denied.
          </span>
          {maxHeight === captionHeight ? null : (
            <button
              className="moreBtn"
              onClick={() => {
                setMaxHeight(captionHeight);
              }}
            >
              ...more
            </button>
          )}
        </div>
        <div className="post__footer__numberOfComments">
          View all 13 comments
        </div>
        <Comments comments={comments} changeLikeStatus={changeLikeStatus} />
        <div className="post__footer__timestamp">14 HOURS AGO</div>
        <div className="post_footer_addComment">
          <form
            ref={formElement}
            className="post_footer_addCommentForm"
            onSubmit={(e) => {
              addComments(e);
            }}
            action=""
          >
            <textarea
              placeholder="Add a comment..."
              value={newCommentInput}
              onChange={(e) => {
                setnewCommentInput(e.target.value);
              }}
              onKeyPress={(e) => {
                setpostButtonDisabled(false);
              }}
              onKeyDown={(e) => {
                if (e.keyCode == 13 && e.shiftKey == false) {
                  addComments(e);
                }
              }}
            ></textarea>
            <button type="submit" disabled={postButtonDisabled}>
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Post;
