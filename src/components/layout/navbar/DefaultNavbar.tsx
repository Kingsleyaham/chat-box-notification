import { Link } from "react-router-dom";
import DefaultUser from "../../../assets/default-user.png";
import SearchBar from "../../form/SearchBar";
import BookmarkIcon from "../../icons/BookmarkIcon";
import ChatIcon from "../../icons/ChatIcon";
import NotificationIcon from "../../icons/NotificationIcon";

type PropTypes = {
  isActive: (path: string) => boolean;
};

const DefaultNavbar = ({ isActive }: PropTypes) => {
  return (
    <nav
      className="navbar fixed z-50 bg-white lg:px-20 px-8
       md:py-4 items-center"
    >
      <div className="navbar-start">
        <h1 className="">
          <span className="text-primary">D</span>welar
        </h1>
      </div>
      <div className="navbar-center md:w-2/6 flex justify-center">
        <SearchBar placeholder="What are you looking for..." />
      </div>
      <div className="navbar-end">
        <div className="grid grid-cols-4">
          <button className="btn btn-ghost btn-circle hover:bg-accent4">
            <Link to="#">
              <BookmarkIcon isActive={isActive("bookmark")} />
            </Link>
          </button>
          <button className="btn btn-ghost btn-circle hover:bg-accent4">
            <Link to="/chat">
              <ChatIcon isActive={isActive("chat")} />
            </Link>
          </button>
          <button className="btn btn-ghost btn-circle hover:bg-accent4">
            <Link to="/notifications">
              <NotificationIcon isActive={isActive("notifications")} />
            </Link>
          </button>
          <button className="btn btn-ghost btn-circle hover:bg-accent4">
            <Link to="/profile">
              <img src={DefaultUser} alt="default user" />
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DefaultNavbar;
