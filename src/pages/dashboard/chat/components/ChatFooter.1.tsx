import AttachmentIcon from "./icons/AttachmentIcon";
import EmojiIcon from "./icons/EmojiIcon";
import SendIcon from "./icons/SendIcon";
import VoiceNoteIcon from "./icons/VoiceNoteIcon";

export const ChatFooter = () => {
  const newLocal =
    "input-control rounded-full w-full text-grey font-medium text-lg border-0 focus:border-0";
  return (
    <div className="fixed bottom-0 bg-white py-4 -ml-6 overflow-x-hidden w-screen">
      <div className="flex justify-start items-center gap-1 px-6">
        <span className="cursor-pointer">
          <EmojiIcon />
        </span>
        <div className="w-[55vw]">
          <input type="text" className={newLocal} placeholder="Message" />
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
