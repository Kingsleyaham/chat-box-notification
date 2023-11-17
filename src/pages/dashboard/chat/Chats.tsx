import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Apartment from "../../../assets/apartment4.png";
import DefaultUser from "../../../assets/default-user.png";
import NairaIcon from "../../../components/icons/NairaIcon";
import ChatFooter from "./components/ChatFooter";
import ChatReplySuggestions from "./components/ChatReplySuggestions";
import MessageBox from "./components/MessageBox";

const Chats = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Chat Tittle */}
      <div className="flex justify-between items-center bg-[#fafafa] shadow-lg py-5 px-16">
        <div className="flex items-center gap-3">
          <img src={DefaultUser} alt="" width="40px" height="40px" />
          <h3>Mr Anthony</h3>
        </div>

        {/* <MenuIcon /> */}
        <div className="relative flex flex-col justify-end items-end">
          <button className="cursor-pointer" onClick={() => setMenuIsOpen(!menuIsOpen)}>
            {menuIsOpen ? <IoClose size="1.5em" /> : <BsThreeDotsVertical size="1.5em" />}
          </button>
          {menuIsOpen && (
            <div
              style={{ boxShadow: "-1px 3px 13px -2px rgba(24, 172, 232, 0.14)" }}
              className="z-50 absolute flex flex-col justify-between items-start rounded-lg bg-white px-6 py-4 w-72 top-12 h-28"
            >
              <button className="cursor-pointer text-lg font-bold">Archived Chats</button>
              <button className="cursor-pointer text-lg font-bold text-danger">Report Agent</button>
            </div>
          )}
        </div>
      </div>
      <div className="scrollable-content h-[60vh] xl:h-[65vh] 2xl:h-[70vh] w-11/12 lg:w-10/12 mx-auto">
        <div className="flex items-center gap-4 bg-[#fafafa] shadow-lg  mt-1 px-6 py-4 w-[97%]">
          <div>
            <img src={Apartment} alt="" width="110px" height="80px" />
          </div>
          <div>
            <h2 className="pb-3">My Odessy Lodge</h2>
            <div className="flex items-center relative">
              <NairaIcon />
              <h2 className="text-primary">240,000</h2>
              <h3 className="text-grey pl-1">Per year</h3>
            </div>
          </div>
        </div>
        {/* Messages */}
        <div className="pt-8 px-16 pb-20">
          <div className="clear-both float-right my-10">
            <MessageBox message="Is this still available?" bg="#86DCFF" color="#111110" />
          </div>

          <div className="clear-both my-10">
            <MessageBox message="Yes it is available? When are you coming for inspection?" />
          </div>

          <div className="clear-both float-right my-10">
            <MessageBox message="Is this still available?" bg="#86DCFF" color="#111110" />
          </div>

          <div className="clear-both float-right my-10">
            <MessageBox message="Is this still available?" bg="#86DCFF" color="#111110" />
          </div>

          <div className="clear-both my-10">
            <MessageBox message="Yes it is available? When are you coming for inspection? This is a new dat to be a good guy to both me and my friends anywhere in the world" />
          </div>
        </div>
      </div>
      <ChatReplySuggestions />
      <ChatFooter />
    </div>
  );
};

export default Chats;
