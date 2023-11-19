import { Link, useNavigate } from "react-router-dom";
import ArrowRight from "../icons/ArrowRight";

type PropTypes = {
  isActive: (path: string) => boolean;
};

const MobileHeader = ({ isActive }: PropTypes) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-start bg-white py-5 px-4 sm:px-12 font-secondary">
      <div>
        <button onClick={() => navigate(-1)}>
          <ArrowRight />
        </button>
      </div>
      {!isActive("chat/") && (
        <div className="px-2 py-2 rounded-full flex justify-around gap-1 bg-accent4">
          <button
            className={`btn btn-ghost text-base sm:text-lg text-grey font-normal ${
              isActive("notifications") ? "bg-white font-medium" : ""
            } rounded-full px-8 sm:px-16`}
          >
            <Link to="/notifications">Notifications</Link>
          </button>
          <button
            className={`btn btn-ghost text-base sm:text-lg text-grey font-normal ${
              isActive("chat") ? "bg-white font-medium" : ""
            } rounded-full px-8 sm:px-16`}
          >
            <Link to="/chat">Messages</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
