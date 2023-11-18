import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import Apartment from "../../../assets/apartment4.png";
import DefaultUser from "../../../assets/default-user.png";
import ActiveIndicator from "../../../components/icons/ActiveIndicator";
import MobileReadIcon from "../../../components/icons/MobileReadIcon";
import NairaIcon from "../../../components/icons/NairaIcon";
import ChatFooter from "./components/ChatFooter";
import ChatReplySuggestions from "./components/ChatReplySuggestions";
import MessageBox from "./components/MessageBox";

const Chats = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="">
      {/* Chat Tittle */}
      {isTabletOrMobile && (
        <div className="absolute top-0 flex justify-between right-0 items-center w-5/6 py-5 px-8">
          <div className="flex items-center gap-3">
            <img src={DefaultUser} alt="" width="50px" height="50px" />
            <div>
              <h3>Mr Anthony</h3>
              <p className="text-grey text-sm">Online</p>
            </div>
            <div className="absolute top-5 left-[4.5rem]">
              <ActiveIndicator />
            </div>
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
                <button className="cursor-pointer text-lg font-bold text-danger">
                  Report Agent
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="w-11/12 md:static md:mb-0 fixed overflow-y-auto left-0 right-0 h-screen mx-auto md:w-full md:p-0 p-4 md:mx-0 md:rounded-none bg-accent5 rounded-xl">
        {/* Chat Tittle */}
        {!isTabletOrMobile && (
          <div className="flex justify-between items-center bg-[#fafafa] shadow-lg py-5 px-16">
            <div className="flex items-center gap-3">
              <img src={DefaultUser} alt="" width="50px" height="50px" />
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
                  <button className="cursor-pointer text-lg font-bold text-danger">
                    Report Agent
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        <div
          className={`${
            isTabletOrMobile ? "overflow-y-auto overflow-x-hidden" : "scrollable-content"
          } h-[65vh] lg:h-[60vh] xl:h-[65vh] 2xl:h-[70vh] w-full mx-auto`}
        >
          <div className="flex items-center md:gap-4 gap-2 bg-[#fafafa] md:shadow-lg  mt-1 md:px-6 px-2 py-4 sm:w-[97%] w-full">
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
          <div className="pt-8 px-4 md:px-16 md:pb-32">
            <div className="clear-both float-right my-4 md:my-8">
              <MessageBox message="Is this still available?" bg="#86DCFF" color="#111110" />
              {isTabletOrMobile && (
                <div className="flex items-center gap-2 justify-end">
                  <MobileReadIcon />
                  <span className="text-grey text-sm">12:40 pm</span>
                </div>
              )}
            </div>
            <div className="clear-both my-4 md:my-8">
              <MessageBox message="Yes it is available? When are you coming for inspection?" />
            </div>
            <div className="clear-both my-4 md:my-8">
              <MessageBox message="Yes it is available? When are you coming for inspection?" />
            </div>
            <div className="clear-both float-right my-4 md:my-8">
              <MessageBox message="Is this still available?" bg="#86DCFF" color="#111110" />
            </div>
            <div className="clear-both float-right my-4 md:my-8">
              <MessageBox message="Is this still available?" bg="#86DCFF" color="#111110" />
            </div>
          </div>
        </div>
        {inputIsFocused && <ChatReplySuggestions />}
        <ChatFooter setInputIsFocused={setInputIsFocused} />
      </div>
    </div>
  );
};

export default Chats;
