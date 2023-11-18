import parseAsHtml from "html-react-parser";
import { useMediaQuery } from "react-responsive";
import MarkReadIcon from "../../../../components/icons/MarkReadIcon";

type PropTypes = {
  message: string;
  bg?: string;
  color?: string;
};

const MessageBox = ({ message, color, bg }: PropTypes) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div
        style={{ backgroundColor: bg ?? "#FAFAFA", color: color ?? "#111110" }}
        className={`relative rounded-2xl py-4 px-4 md:px-8 max-w-md sm:w-[320px] lg:w-[400px] flex justify-between items-center min-h-max`}
      >
        <p className="text-lg font-semibold">{parseAsHtml(message)}</p>
        {!isTabletOrMobile && (
          <div className="absolute right-1 bottom-1">
            <MarkReadIcon />
          </div>
        )}
      </div>
    </>
  );
};

export default MessageBox;
