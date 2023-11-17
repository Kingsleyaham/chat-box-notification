import { Outlet } from "react-router-dom";
import ChatSideBar from "./components/ChatSideBar";

const Chat = () => {
  // a dummy data emulating chats

  return (
    <div className="flex gap-8">
      <div className="w-96">
        <ChatSideBar />
      </div>
      <div className="w-[75%] mt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Chat;
