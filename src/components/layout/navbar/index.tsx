import { useMediaQuery } from "react-responsive";
import DefaultNavbar from "./DefaultNavbar";
import MobileNavbar from "./MobileNavbar";

type PropTypes = {
  isActive: (path: string) => boolean;
};

const Navbar = ({ isActive }: PropTypes) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  console.log(isTabletOrMobile);

  return (
    <>
      {isTabletOrMobile ? (
        <MobileNavbar isActive={isActive} />
      ) : (
        <DefaultNavbar isActive={isActive} />
      )}
    </>
  );
};

export default Navbar;
