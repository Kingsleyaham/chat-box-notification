import { useMediaQuery } from "react-responsive";
import AttachmentIcon from "./icons/AttachmentIcon";
import EmojiIcon from "./icons/EmojiIcon";
import SendIcon from "./icons/SendIcon";
import VoiceNoteIcon from "./icons/VoiceNoteIcon";

type propTypes = {
  setInputIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ChatIconProps = {
  isMobile: boolean;
};

const ChatFooter = ({ setInputIsFocused }: propTypes) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="md:fixed bottom-0 bg-white right-0 md:py-2 w-full mx-auto my-[5%] md:my-0 rounded-full md:rounded-none md:px-0 overflow-x-hidden md:w-full left-0 lg:pl-96 z-0">
      <div className="flex justify-start items-center gap-1 px-4 md:px-8">
        <span className="cursor-pointer">
          <EmojiIcon isMobile={isMobile} />
        </span>
        <div className="form-control">
          <input
            type="text"
            className="rounded-full w-full text-grey font-medium text-base md:text-[16px] border-0 focus:border-0 focus:outline-0"
            placeholder="Message"
            onFocus={() => setInputIsFocused(true)}
            onBlur={() => setInputIsFocused(false)}
          />
        </div>

        <span className="cursor-pointer">
          <VoiceNoteIcon isMobile={isMobile} />
        </span>
        <span className="cursor-pointer">
          <AttachmentIcon isMobile={isMobile} />
        </span>
        <span className="cursor-pointer block p-2.5 bg-primary rounded-full">
          <SendIcon isMobile={isMobile} />
        </span>
      </div>
    </div>
  );
};

export default ChatFooter;
