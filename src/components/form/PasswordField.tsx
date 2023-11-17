import HidePasswordIcon from "../../assets/Hide.png";

import { useState } from "react";

const PasswordField = () => {
  const [pwdIsVisible, setPwdIsVisible] = useState(false);

  const toggleShowPassword = () => {
    setPwdIsVisible(!pwdIsVisible);
  };
  return (
    <div className="relative max-w-screen-sm">
      <input type={pwdIsVisible ? "text" : "password"} className="input-control" />
      <img
        src={HidePasswordIcon}
        width="25px"
        height="25px"
        className="absolute right-4 top-2.5 cursor-pointer select-none"
        alt="password icon"
        onClick={toggleShowPassword}
      />
    </div>
  );
};

export default PasswordField;
