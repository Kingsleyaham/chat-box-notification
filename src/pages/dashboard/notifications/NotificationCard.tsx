import parseAsHtml from "html-react-parser";
import { useMediaQuery } from "react-responsive";

type NotificationProps = {
  imgSrc: string;
  subject: string;
  message: string;
  date: string;
  appartmentImgSrc?: string | undefined | null;
  isUnread?: boolean;
};

const NotificationCard = ({
  imgSrc,
  subject,
  message,
  date,
  appartmentImgSrc,
  isUnread,
}: NotificationProps) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div
      className={`flex items-center justify-between  border-b-[1.8px] cursor-pointer hover:shadow-xl z-0 ${
        isUnread || isTabletOrMobile ? "bg-accent5" : ""
      } ${isTabletOrMobile ? "my-1 rounded-[25px]" : ""}`}
    >
      <div className="flex items-center justify-start gap-2 md:gap-4 lg:gap-6  px-2 py-2 lg:p-8 md:p-4">
        <div>
          <img
            src={imgSrc}
            alt="notif img"
            width="45px"
            height="45px"
            style={{ clipPath: "circle()" }}
          />
        </div>
        <div>
          <p className="font-bold md:text-xl text-lg pb-1">{subject}</p>
          <p className="md:text-[18px] sm:text-base text-sm leading-5">{parseAsHtml(message)}</p>
          <span className="md:text-sm text-xs font-medium">{date}</span>
        </div>
      </div>
      {appartmentImgSrc && (
        <div className="pr-4 md:pr-8">
          <img
            src={appartmentImgSrc}
            style={{ clipPath: "circle()" }}
            alt="apartment img"
            width="70px"
            height="70px"
          />
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
