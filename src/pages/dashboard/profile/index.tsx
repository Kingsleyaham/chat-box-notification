import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import ProfileMobileNav from "./ProfileMobileNav";
import SideBar from "./ProfileSideBar";

const Profile = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      {isTabletOrMobile ? (
        <div className="bg-[#F9F9F9]">
          <ProfileMobileNav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          <SideBar menuIsOpen={menuIsOpen} />
          <div className="pt-20">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="flex gap-8">
          <div className="w-80">
            <SideBar menuIsOpen={menuIsOpen} />
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
