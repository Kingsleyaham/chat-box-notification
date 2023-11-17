import { useState } from "react";
import NotificationSetting from "./NotificationSetting";
import SecuritySetting from "./SecuritySetting";

export const Settings = () => {
  // sets the active tabs
  // vales are "0" for the first tab and "1" for second tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="py-2 pb-6">
        <h2 className="text-3xl font-bold">Settings</h2>
      </div>

      <div className="">
        {/* Tabs */}
        <div className="tabs justify-start pb-4 font-semibold">
          <a
            className={`tab ${activeTab == 0 ? "tab-active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            Security
          </a>
          <a
            className={`tab ${activeTab == 1 ? "tab-active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Notifications
          </a>
        </div>
        <hr className="ml-4 border-[1.8px]" />
        {/* Tab content */}
        <div className="">
          {activeTab == 0 && <SecuritySetting />}
          {activeTab == 1 && <NotificationSetting />}
        </div>
      </div>
    </div>
  );
};
