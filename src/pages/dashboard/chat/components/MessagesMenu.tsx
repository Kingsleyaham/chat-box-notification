import { useState } from "react";
import { IoClose } from "react-icons/io5";
import HamburgerIcon from "../../../../components/icons/HamburgerIcon";

const MessagesMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
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
  );
};

export default MessagesMenu;
