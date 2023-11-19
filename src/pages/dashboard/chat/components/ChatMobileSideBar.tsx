import SearchBar from "../../../../components/form/SearchBar";
import ChatCard from "./ChatCard";
import MessagesMenu from "./MessagesMenu";
import NoMessages from "./NoMessages";

const ChatMobileSideBar = () => {
  // will be removed during implementation
  // just to mock when there is no messages
  const noMessage = true;
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

      {noMessage ? (
        <NoMessages>
          <p>You don’t have any messages yet.</p>
          <p>
            Find something in the{" "}
            <a href="#" className="text-primary">
              marketplace
            </a>{" "}
            to discuss.
          </p>
        </NoMessages>
      ) : (
        <div className="mt-3">
          <ChatCard isActive={true} />

          <ChatCard />
        </div>
      )}
    </div>
  );
};

export default ChatMobileSideBar;
