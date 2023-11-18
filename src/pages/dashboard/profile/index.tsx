import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import ProfileMobileNav from "./ProfileMobileNav";
import SideBar from "./ProfileSideBar";

const Profile = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <div className="w-full ">
          <ProfileMobileNav />
          <Outlet />
        </div>
      ) : (
        <div className="flex gap-8">
          <div className="w-80">
            <SideBar />
          </div>
          <div className="w-[70%] px-8 mt-8">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
