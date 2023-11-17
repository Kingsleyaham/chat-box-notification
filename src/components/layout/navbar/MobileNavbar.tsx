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
    <div className="btm-nav">
      <button className={`${isHome() ? "active" : ""} flex flex-col justify-center gap-1`}>
        <Link to="/">
          <HomeIcon />
        </Link>
        <span className="font-semibold text-grey">Home</span>
      </button>
      <button
        className={`${isActive("bookmark") ? "active" : ""} flex flex-col justify-center gap-1`}
      >
        <Link to="#">
          <BookmarkIcon />
        </Link>
        <span className="font-semibold text-grey">Bookmark</span>
      </button>
      <button
        className={`${isActive("wallet") ? "active" : ""} flex flex-col justify-center gap-1`}
      >
        <Link to="/wallet">
          <WalletIcon />
        </Link>
        <span className="font-semibold text-grey">Wallet</span>
      </button>
      <button
        className={`${isActive("profile") ? "active" : ""} flex flex-col justify-center gap-1`}
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
