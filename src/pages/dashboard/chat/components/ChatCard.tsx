import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import DefaultUser from "../../../../assets/default-user.png";
import ActiveIndicator from "../../../../components/icons/ActiveIndicator";

type PropTypes = {
  isActive?: boolean;
};

const ChatCard = ({ isActive }: PropTypes) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <Link to="/chat/1">
      <div
        className={`relative flex justify-between rounded-full lg:mb-0 mb-4 lg:w-full w-80 sm:w-[450px] lg:mx-0 mx-4  lg:rounded-none items-center gap-4 lg:py-4 py-1.5 md:py-2 cursor-pointer px-4 ${
          isActive || isTabletOrMobile ? "bg-accent4" : ""
        }`}
      >
        <img
          src={DefaultUser}
          alt=""
          className="rounded-full w-ma"
          style={{ clipPath: "circle()" }}
          width="50px"
          height="50px"
        />
        <div>
          <h3 className="text-base sm:text-lg">Mr Anthony</h3>
          <p className="text-sm sm:text-base md:text-lg">
            Yes. It is still available. When are you coming for Inspection?{" "}
          </p>
        </div>

        {isTabletOrMobile && (
          <div className="absolute left-[2.8rem] top-4 sm:left-14 sm:top-2.5 md:top-[1.5rem]">
            <ActiveIndicator />
          </div>
        )}

        <div className="w-4 h-4 rounded-full bg-[#8BC83F] text-white flex items-center justify-center p-2">
          <span className="text-xs">1</span>
        </div>
      </div>
    </Link>
  );
};

export default ChatCard;
