import { Link, useLocation } from "react-router-dom";
import BookmarkIcon from "../../icons/BookmarkIcon";
import HomeIcon from "../../icons/HomeIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import WalletIcon from "../../icons/WalletIcon";

type PropTypes = {
  isActive: (path: string) => boolean;
};

const MobileNavbar = ({ isActive }: PropTypes) => {
  const { pathname } = useLocation();

  const isHome = () => {
    return pathname === "/";
  };

  return (
    <div className="btm-nav bg-white z-30">
      <button className={`${isHome() ? "active bg-white" : ""} flex flex-col justify-center gap-1`}>
        <Link to="/">
          <HomeIcon />
        </Link>
        <span className="font-semibold text-grey">Home</span>
      </button>
      <button
        className={`${
          isActive("bookmark") ? "active bg-white" : ""
        } flex flex-col justify-center gap-1`}
      >
        <Link to="#">
          <BookmarkIcon />
        </Link>
        <span className="font-semibold text-grey">Bookmark</span>
      </button>
      <button
        className={`${
          isActive("wallet") ? "active bg-white" : ""
        } flex flex-col justify-center gap-1`}
      >
        <Link to="/wallet">
          <WalletIcon />
        </Link>
        <span className="font-semibold text-grey">Wallet</span>
      </button>
      <button
        className={`${
          isActive("profile") ? "active bg-white" : ""
        } flex flex-col justify-center gap-1`}
      >
        <Link to="/profile">
          <ProfileIcon />
        </Link>
        <span className="font-semibold text-grey">Profile</span>
      </button>
    </div>
  );
};

export default MobileNavbar;
