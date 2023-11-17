import ToggleSwitch from "../../../../components/ToggleSwitch";
import Button from "../../../../components/form/Button";
import PasswordField from "../../../../components/form/PasswordField";
import BulletIcon from "../../../../components/icons/BulletIcon";

const SecuritySetting = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div className="w-[60%] py-2">
          <h3 className="font-bold">Two-Factor Authentication</h3>
          <p className="text-[18px]">
            Add extra security to your account. Together with your password, you'll have to add a
            unique code
          </p>
        </div>

        <ToggleSwitch />
      </div>
      <br />
      <div className="flex justify-between items-center">
        <div className="w-[60%] py-2">
          <h3 className="font-bold">Third-party app Authentication</h3>
          <p className="text-[18px]">
            Allow sign-in authentication from external apps like Google, Facebook, Twitter. This can
            be turned off.
          </p>
        </div>

        <div className="">
          <ToggleSwitch />
        </div>
      </div>

      {/* Changing of Password */}

      <div>
        <h3 className="border-b-[2px] py-2 mt-4">Change Password</h3>

        <div>
          <form>
            <div className="form-control w-full py-4 space-y-3">
              <label className="label">
                <span>New Password</span>
              </label>
              <PasswordField />
            </div>

            <div className="form-control w-full py-4 space-y-3">
              <label className="label">
                <span className="font-semibold">Confirm Password</span>
              </label>
              <PasswordField />
            </div>
          </form>
        </div>

        {/* Rules For Password */}
        <div className="my-3 p-5 bg-[#ebd0ffcc] rounded-[15px]">
          <h3 className="font-bold py-2">Rules for passwords</h3>
          <div className="text-grey">
            <p className="py2">
              To create a new password, you must meet the following requirements.
            </p>

            <div>
              <div className="grid md:grid-cols-2 gap-4 pt-5 text-sm max-w-lg">
                <div className="flex gap-4 items-center">
                  <BulletIcon />
                  <span>Minimum 8 characters</span>
                </div>
                <div className="flex gap-4 items-center">
                  <BulletIcon />
                  <span>At least one Number</span>
                </div>
                <div className="flex gap-4 items-center">
                  <BulletIcon />
                  <span>At least one special Character</span>
                </div>
                <div className="flex gap-4 items-center">
                  <BulletIcon />
                  <span>Must be different from the previous</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Account */}

        <div className="flex justify-between items-center py-8">
          <div>
            <h3>Delete Account</h3>
            <p>This will delete your account. Your account will be permanently deleted </p>
          </div>
          <div>
            <button className="danger-btn">Delete Account</button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default SecuritySetting;
