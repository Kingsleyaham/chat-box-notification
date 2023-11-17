import AttachmentIcon from "./icons/AttachmentIcon";
import EmojiIcon from "./icons/EmojiIcon";
import SendIcon from "./icons/SendIcon";
import VoiceNoteIcon from "./icons/VoiceNoteIcon";

type propTypes = {
  setInputIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};
const ChatFooter = ({ setInputIsFocused }: propTypes) => {
  return (
    <div className="fixed bottom-0 bg-white py-2 overflow-x-hidden w-full left-0 pl-96 z-0">
      <div className="flex justify-start items-center gap-1 px-8">
        <span className="cursor-pointer">
          <EmojiIcon />
        </span>
        <div className="form-control">
          <input
            type="text"
            className="input-control rounded-full w-full text-grey font-medium text-lg border-0 focus:border-0"
            placeholder="Message"
            onFocus={() => setInputIsFocused(true)}
            onBlur={() => setInputIsFocused(false)}
          />
        </div>

        <span className="cursor-pointer">
          <VoiceNoteIcon />
        </span>
        <span className="cursor-pointer">
          <AttachmentIcon />
        </span>
        <span className="cursor-pointer block p-2.5 bg-primary rounded-full">
          <SendIcon />
        </span>
      </div>
    </div>
  );
};

export default ChatFooter;
