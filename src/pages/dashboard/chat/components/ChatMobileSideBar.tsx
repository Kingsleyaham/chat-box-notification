import SearchBar from "../../../../components/form/SearchBar";
import ChatCard from "./ChatCard";
import MessagesMenu from "./MessagesMenu";

const ChatMobileSideBar = () => {
  return (
    <div>
      <div className="flex justify-between px-6 items-center pb-3">
        <div className="w-9/12">
          <SearchBar placeholder="Search message" classNames="border-0 bg-accent4" />
        </div>
        <MessagesMenu />
      </div>
      <div className="px-6">
        <h2 className="text-2xl">My Messages</h2>
      </div>

      <div className="mt-3">
        <ChatCard isActive={true} />

        <ChatCard />
      </div>
    </div>
  );
};

export default ChatMobileSideBar;
