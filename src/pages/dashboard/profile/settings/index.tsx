import { useState } from "react";
import NotificationSetting from "./NotificationSetting";
import SecuritySetting from "./SecuritySetting";

const Settings = () => {
  // sets the active tabs
  // vales are "0" for the first tab and "1" for second tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-8 md:px-12 pb-32 lg:pb-8">
      <div className="py-4 pb-6">
        <h2 className="text-3xl font-bold">Settings</h2>
      </div>

      <div className="box-wrapper">
        {/* Tabs */}
        <div className="tabs justify-start pb-4 font-semibold select-none">
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

export default Settings;
