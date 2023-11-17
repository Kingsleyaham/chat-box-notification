import { Outlet } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";

const Dashboard = () => {
  return (
    <div className="bg-accent5 h-screen overflow-auto">
      <Navbar />
      <div className="mt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
