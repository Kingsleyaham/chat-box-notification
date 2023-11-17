import { useState } from "react";
import { IoClose } from "react-icons/io5";
import SearchBar from "../../../../components/form/SearchBar";
import HamburgerIcon from "../../../../components/icons/HamburgerIcon";
import ChatCard from "./ChatCard";

const ChatSideBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div
      id="sideNav"
      className="lg:block hidden fixed rounded-none border-none w-96 top-0 pt-16 bottom-0 overflow-auto bg-white z-10"
    >
      <div className="pt-20 ">
        <div className=" w-3/4 mx-auto py-4">
          <SearchBar placeholder="Search message box..." />
        </div>

        <div className="flex justify-between items-center px-5 pt-3">
          <h2>My Messages</h2>
          <div className="relative flex flex-col justify-end items-end">
            <button className="cursor-pointer" onClick={() => setMenuIsOpen(!menuIsOpen)}>
              {menuIsOpen ? <IoClose size="1.5em" /> : <HamburgerIcon />}
            </button>
            {menuIsOpen && (
              <div
                style={{ boxShadow: "-1px 3px 13px -2px rgba(24, 172, 232, 0.14)" }}
                className="z-50 absolute flex flex-col justify-between items-start rounded-lg bg-white px-6 py-4 w-72 top-12 gap-5"
              >
                <button className="cursor-pointer text-lg font-bold">Mark all as read</button>
                <button className="cursor-pointer text-lg font-bold">Archived Chats</button>
                <button className="cursor-pointer text-lg font-bold">Spam Chats</button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-3">
          <ChatCard isActive={true} />

          <ChatCard />
          <ChatCard />
        </div>
      </div>
    </div>
  );
};

export default ChatSideBar;
