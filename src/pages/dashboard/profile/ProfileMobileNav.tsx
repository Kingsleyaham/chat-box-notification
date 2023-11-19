import { IoClose } from "react-icons/io5";
import DefaultUser from "../../../assets/default-user.png";
import HamburgerIcon from "../../../components/icons/HamburgerIcon";

type PropTypes = {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileMobileNav = ({ setMenuIsOpen, menuIsOpen }: PropTypes) => {
  return (
    <div className=" px-8 md:px-12 py-1 z-50 bg-white fixed w-full">
      <div className="flex justify-between items-center py-3">
        <button onClick={() => setMenuIsOpen(!menuIsOpen)} className="cursor-pointer">
          {menuIsOpen ? <IoClose size="2rem" /> : <HamburgerIcon />}

          {/* <HamburgerIcon /> */}
        </button>
        <button>
          <img src={DefaultUser} alt="user avatar" />
        </button>
      </div>
    </div>
  );
};

export default ProfileMobileNav;
