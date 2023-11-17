import { Outlet } from "react-router-dom";
import SideBar from "./ProfileSideBar";

const Profile = () => {
  return (
    <div className="flex gap-8">
      <div className="w-80">
        <SideBar />
      </div>
      <div className="w-[70%] px-8 mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
