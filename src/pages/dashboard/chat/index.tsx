import { useMediaQuery } from "react-responsive";
import { Outlet, useLocation } from "react-router-dom";
import ChatSideBar from "./components/ChatSideBar";
import MobileSideBar from "./components/ChatMobileSideBar";

const Chat = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const { pathname } = useLocation();

  return (
    <div className="flex gap-8">
      {isTabletOrMobile ? (
        <>
          <div className="mt-2 w-full bg-white">
            {pathname === "/chat" ? <MobileSideBar /> : <Outlet />}
          </div>
        </>
      ) : (
        <>
          <div className="w-96">
            <ChatSideBar />
          </div>
          <div className="bg-accent5 fixed pl-96 mt-2 w-full">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
