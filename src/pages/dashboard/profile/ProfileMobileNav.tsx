import DefaultUser from "../../../assets/default-user.png";
import HamburgerIcon from "../../../components/icons/HamburgerIcon";

const ProfileMobileNav = () => {
  return (
    <div className=" px-8 md:px-12 py-1 z-50 bg-white">
      <div className="flex justify-between items-center py-3">
        <HamburgerIcon />
        <button>
          <img src={DefaultUser} alt="user avatar" />
        </button>
      </div>
    </div>
  );
};

export default ProfileMobileNav;
