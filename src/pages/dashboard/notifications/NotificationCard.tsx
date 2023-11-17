import parseAsHtml from "html-react-parser";

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
  return (
    <div
      className={`flex items-center justify-between  border-b-[1.8px] cursor-pointer hover:shadow-xl ${
        isUnread ? "bg-accent5" : ""
      }`}
    >
      <div className="flex items-center justify-start gap-6 p-8">
        <div>
          <img src={imgSrc} alt="notif img" width="50px" height="50px" />
        </div>
        <div>
          <p className="font-bold text-xl pb-1">{subject}</p>
          <p className="text-[18px]">{parseAsHtml(message)}</p>
          <span className="text-sm font-medium">{date}</span>
        </div>
      </div>
      {appartmentImgSrc && (
        <div className="pr-4 md:pr-8">
          <img src={appartmentImgSrc} alt="apartment img" width="70px" height="70px" />
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
