import DefaultUser from "../../../../assets/default-user.png";

type PropTypes = {
  isActive?: boolean;
};

const ChatCard = ({ isActive }: PropTypes) => {
  return (
    <div
      className={`flex justify-between items-center gap-4 py-4 cursor-pointer p-4 ${
        isActive ? "bg-accent4" : ""
      }`}
    >
      <img src={DefaultUser} alt="" width="50px" height="50px" className="rounded-full" />
      <div>
        <h3>Mr Anthony</h3>
        <p className="text-sm">Yes. It is still available. When are you coming for Inspection? </p>
      </div>

      <div className="w-4 h-4 rounded-full bg-[#8BC83F] text-white flex items-center justify-center p-2">
        <span className="text-xs">1</span>
      </div>
    </div>
  );
};

export default ChatCard;
