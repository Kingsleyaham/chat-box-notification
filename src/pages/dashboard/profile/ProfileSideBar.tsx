import { Link } from "react-router-dom";
const ProfileSideBar = () => {
  return (
    <div id="sideNav" className="lg:block hidden fixed rounded-none border-none w-80 top-0">
      <div className="h-screen pt-16">
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
