import { useMediaQuery } from "react-responsive";
import NoMessageMobile from "../../../../assets/no-messages-mobile.png";
import NoMessage from "../../../../assets/no-messages.png";

type PropTypes = {
  children: any;
};

const NoMessages = ({ children }: PropTypes) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  return (
    <div className="flex lg:h-screen mt-12 lg:mt-2 flex-col justify-center items-center">
      <img
        src={isTabletOrMobile ? NoMessageMobile : NoMessage}
        alt="no message"
        className="select-none"
      />
      <div className="py-2 text-center font-semibold">{children}</div>
    </div>
  );
};

export default NoMessages;
