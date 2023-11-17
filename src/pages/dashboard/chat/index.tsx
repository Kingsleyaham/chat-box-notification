import { Outlet } from "react-router-dom";
import ChatSideBar from "./components/ChatSideBar";

const Chat = () => {
  // a dummy data emulating chats

  return (
    <div className="flex gap-8">
      <div className="w-96">
        <ChatSideBar />
      </div>
      <div className="fixed pl-96 mt-2 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Chat;
