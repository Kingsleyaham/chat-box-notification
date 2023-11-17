import { Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/dashboard";
import Chat from "./pages/dashboard/chat";
import Chats from "./pages/dashboard/chat/Chats";
import Notifications from "./pages/dashboard/notifications";
import Profile from "./pages/dashboard/profile";
import AccountOverview from "./pages/dashboard/profile/AccountOverview";
import Settings from "./pages/dashboard/profile/settings";

function App() {
  return (
    <div className="font-display">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile" element={<AccountOverview />} />
            <Route path="/profile/setting" element={<Settings />} />
          </Route>
          <Route path="/chat" element={<Chat />}>
            <Route path="/chat/:chatId" element={<Chats />} />
          </Route>
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
