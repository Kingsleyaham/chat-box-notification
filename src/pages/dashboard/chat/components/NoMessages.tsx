import NoMessage from "../../../../assets/no-messages.png";

type PropTypes = {
  children: any;
};

const NoMessages = ({ children }: PropTypes) => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <img src={NoMessage} alt="no message" className="select-none" />
      <div className="py-2 text-center font-semibold">{children}</div>
    </div>
  );
};

export default NoMessages;
