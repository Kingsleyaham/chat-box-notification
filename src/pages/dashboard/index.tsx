import { Outlet, useLocation } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../components/layout/MobileHeader";
import Navbar from "../../components/layout/navbar";

const Dashboard = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname.startsWith(`/${path}`);
  };

  return (
    <div className="bg-accent5 h-screen overflow-auto">
      {isTabletOrMobile ? (
        <>
          <MobileHeader isActive={isActive} />
          <Navbar isActive={isActive} />
          <div className="mt-6">
            <Outlet />
          </div>
        </>
      ) : (
        <>
          <Navbar isActive={isActive} />
          <div className="mt-24">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
