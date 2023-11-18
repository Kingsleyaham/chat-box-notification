import { Outlet, useLocation } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../components/layout/MobileHeader";
import Navbar from "../../components/layout/navbar";

const Dashboard = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname.startsWith(`/${path}`);
  };

  return (
    <>
      {isTabletOrMobile ? (
        <div className="h-screen overflow-auto bg-white">
          <MobileHeader isActive={isActive} />
          <Navbar isActive={isActive} />
          <div className="pt-2 bg-white">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="h-screen overflow-auto  bg-accent5">
          <Navbar isActive={isActive} />
          <div className="pt-24">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
