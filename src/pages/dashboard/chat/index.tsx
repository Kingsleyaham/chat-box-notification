import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import ChatSideBar from "./components/ChatSideBar";

const Chat = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="flex gap-8">
      {isTabletOrMobile ? (
        <div className="fixed mt-2 w-full">
          <Outlet />
        </div>
      ) : (
        <>
          <div className="w-96">
            <ChatSideBar />
          </div>
          <div className="fixed pl-96 mt-2 w-full">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
