import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SuppervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { BusinessCenter, Chat, Notifications } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SuppervisorAccountIcon} title="Network" />
        <HeaderOption Icon={BusinessCenter} title="job" />
        <HeaderOption Icon={Chat} title="Message" />
        <HeaderOption Icon={Notifications} title="notification" />
        <HeaderOption avatar={true} title="me" onClick={logOutOfApp} />
      </div>
    </div>
  );
}

export default Header;
