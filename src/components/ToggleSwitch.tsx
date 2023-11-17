import { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="sr-only"
        />
        <div
          className={`box block h-7 w-[54px] rounded-full ${isChecked ? "bg-primary" : "bg-grey"}`}
        ></div>
        <div
          className={`absolute left-[3px] top-[2px] flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
            isChecked ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
