import parseAsHtml from "html-react-parser";
import MarkReadIcon from "../../../../components/icons/MarkReadIcon";

type PropTypes = {
  message: string;
  bg?: string;
  color?: string;
};

const MessageBox = ({ message, color, bg }: PropTypes) => {
  return (
    <div
      style={{ backgroundColor: bg ?? "#FAFAFA", color: color ?? "#111110" }}
      className={`relative rounded-2xl py-4 px-8 w-[320px] lg:w-[400px] flex justify-between items-center min-h-max`}
    >
      <p className="text-lg font-semibold">{parseAsHtml(message)}</p>
      <div className="absolute right-1 bottom-1">
        <MarkReadIcon />
      </div>
    </div>
  );
};

export default MessageBox;
