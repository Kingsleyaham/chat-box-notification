import SearchBar from "../../../../components/form/SearchBar";
import ChatCard from "./ChatCard";
import MessagesMenu from "./MessagesMenu";

const ChatSideBar = () => {
  return (
    <div
      id="sideNav"
      className="lg:block hidden fixed rounded-none border-none w-96 top-0 pt-16 bottom-0 overflow-auto bg-white z-10"
    >
      <div className="pt-20">
        <div className=" w-3/4 mx-auto py-4">
          <SearchBar placeholder="Search message box..." />
        </div>

        <div className="flex justify-between items-center px-5 pt-3">
          <h2>My Messages</h2>
          <MessagesMenu />
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
