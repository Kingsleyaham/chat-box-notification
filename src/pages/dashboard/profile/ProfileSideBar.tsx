import { Link } from "react-router-dom";

type PropTypes = {
  menuIsOpen: boolean;
};
const ProfileSideBar = ({ menuIsOpen }: PropTypes) => {
  return (
    <div
      id="sideNav"
      className={`lg:block ${
        menuIsOpen ? "fixed top-1 w-96 transition ease-in-out duration-700" : "relative hidden"
      } lg:fixed rounded-none border-none lg:w-80 top-0 z-30 `}
    >
      <div className="lg:h-screen h-[80vh] pt-16">
        <div className="flex flex-col bg-white py-8 items-center justify-between w-full h-full">
          <div className="flex flex-col items-center gap-10 pt-20">
            <button className="sidebar-link">
              <Link to="/profile">Account Details</Link>
            </button>
            <button className="sidebar-link">
              <Link to="#">My Wallet</Link>
            </button>
            <button className="sidebar-link">
              <Link to="/profile/setting">Settings</Link>
            </button>
          </div>
          <div>
            <button className="sidebar-link text-red-500">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
