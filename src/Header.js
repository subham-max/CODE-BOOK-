import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEyUlEQVR4Xu2bWahWVRTHfw6BODQoOfSgUkThPBYa2FNJQfVQ0UMqOGuKGiqYYlqYGmhmcxQapCASpCKooYgvIubwYEKBgkJJipE4lGCW/GV/dfv4znf2sM653e634L7cu/Ya/mettddee982tHJq08r9pwFAIwJaOQKNFGjlAVBaEWwLDAVGAg8B9wN3A13cB7gCXAJOAz8AR4DjwJ9Ff6AiU+AO4GngZeAJ53CIP78C3wCbgV3AHyGLfXmLAOAuYBYwF+jua0gO33ngXeBDQNFiRpYAtANmA8sjvravQ4qK14GPrNLDCoD+wCZgiK8niXxHgXHA94lyTIrgROADoGOqMYHrrwEzHPCBS/9hT42At4DF0dptFr7h0i5KWgoAysOZUVrtF73nim6w5FgA/gtfvtpZFV9FQxDFAKCc3xCkpTxmFUb1Dd4UCoCq/eFmKHi+Dl0FRrhu0mtNCADa59WiWm51PwN7gFPAdWexbNLPI8DzXl78m0kfaJRvnxACgDo7dWMWdBN4zcm7kSFwCvBZpDIV50981voCoPb2jGGHN83DuRQAfgH6AkqJuuQLgPZ6VX4LOuRCNE9WCgCSvRBYk6fEBwCd6n40PNi8AnycZxiQCsA5oDegdMskHwCeA7Z5GOzLouL2bQ3mx4GXAM0ORA8D+l0KPQXsTgVgK/BiihVVax90Vb9a5Emgn6EeiVJPoN4gOgL0NVRQNL2xoiwAVGT7WClxci4APYG/suTmpcBwt/db2lUmALJ7EHAiFgAdN30KVh5AmvNp5id6wRXV6jVfA72a/LIrILBSaRKwMRaAdcC8VAuAZ4CdgXImA58HrqnF/jawKBaA7cCzBkbEALAUeNNA91f1inheDTgAjDEwIgYApZ5SMJX2uql0TTl5ABxz8/xUI2IAsIo+HY4ejU0BKwDU++93RpwFah2AtAWq66yQQndwKvLu+B4NgFUKNPWj7G0wKQWswrA5AUgqgu8ArxqEYXMCsNrNHqKK4HTfwUIASGWngGaYX8QWwf9DKzwQ+C4WAB2GLgL3BHzhPNYyI0CHoR71DMrrA7R2izun5znm+/cyAfgSmJAKgJqYHb7eefCVCcBY98Yg0yyfCGjvTm91Q8nD8QpLWQD85OYLySMxGa7T1KoAJ+uxlgXAfEDbeF3yiQAJuNONxS2KYRkAqHCrtf7NCgDJ0euP9/MEevy9DAB87h1um+obAeLVlqiTlXqDFCoaAN07jK43B2xqfAgAWqdRte4HOyUgUCQAekA1LGPqXNPkUAAkRGNm7a+xdBD4vcbix4AOsULdOt0raIzvTTEASLgeIyzz1lIO4xJgZaiqWACkZz0wJ1RhQfxrgQUxslMAkD5FgaKhOUkXt9E9SioAclxPYXUX37lkFC4DU0NzvtpGCwAkUw+gVRj1GLoM0lY3PqTaZxllBYDkq09QA7IC6FYQCurwFPK6MMm87wvRbQlARa9SQfN8jdLuCzGmDq8ONurrPwX0QtSMigCgYpweVemZvPqGJ4F7A63WMEMPqPQGeV/eQ4dA2X+zFwlAU5ukZ4B7wqZ68YC7ctchS6SCpstTvRar/MNE5hgr1tla68oCwNJmU1kNAEzhbIHCGhHQAj+aqcmNCDCFswUKuwVNC8xBuFMqjQAAAABJRU5ErkJggg=="
          alt=""
        ></img>
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search Codebook" type="text" />
      </div>

      <div className="header__center">
        <div
          className="header__option
          header__option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
