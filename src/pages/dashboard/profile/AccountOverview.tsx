import React, { useState } from "react";
import EditProfile from "../../../assets/edit-profile.png";
import Button from "../../../components/form/Button";
import DatePicker from "../../../components/form/DatePicker";
import countries from "../../../countries.json";

type StateProps = {
  code: string;
  name: string;
  subdivision: null | string;
};

const AccountOverview = () => {
  const [states, setStates] = useState<StateProps[]>([]);

  const populateStates = (selectedCountry: string) => {
    const newStates = countries.filter(
      (country) => country.name.toLowerCase() === selectedCountry
    )[0].states;

    setStates(newStates);
  };
  return (
    <div>
      <div className="py-2 pb-6">
        <h2 className="text-3xl font-bold">Account Overview</h2>
      </div>

      <div className="bg-white rounded-lg mb-12">
        {/* Avatar Section */}
        <div className="py-6 border-b flex items-center justify-start gap-16">
          <div className="px-8">
            <h3>Avatar</h3>
            <p className="text-lg">Edit your profile picture</p>
          </div>
          <div>
            <img src={EditProfile} alt="edit profile" width="90px" height="90px" />
          </div>
        </div>
        {/* Contact Info Section */}
        <div className="py-6 border-b flex justify-start gap-16">
          <div className="px-8">
            <h3>Contact Info</h3>
            <p className="text-lg">Update your contact Info</p>
          </div>
          <div className="w-3/6">
            <div className="form-control">
              <label className="label">
                <span>Full Name</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="fullname"
                placeholder="Just Answer"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Email Address</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="email"
                placeholder="besimple@design.com"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Phone Number</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="phone_num"
                placeholder="+234 803 884 8947"
              />
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="py-6 border-b flex justify-start gap-16">
          <div className="px-8">
            <h3>Additional Info</h3>
            <p className="text-lg">Add other Info about you</p>
          </div>
          <div className="w-3/6">
            <div className="form-control">
              <label className="label">
                <span>Select Location</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="location"
                placeholder="Just Answer"
              />
            </div>

            <div className="flex justify-between items-center gap-3">
              <div className="form-control">
                <label className="label">
                  <span>DOB</span>
                </label>
                <DatePicker name="date_of_birth" placeholder="Choose date" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Sex</span>
                </label>
                <select className="input-control" name="gender">
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="py-6 border-b flex justify-start gap-16">
          <div className="px-8">
            <h3>Address</h3>
            <p className="text-lg">Add other Info about you</p>
          </div>
          <div className="w-3/6">
            <div className="form-control">
              <label className="label">
                <span>Home Address</span>
              </label>
              <input type="text" className="input-control" name="address" placeholder="Address" />
            </div>

            <div className="form-control">
              <label className="label">
                <span>State</span>
              </label>
              <select className="input-control" name="state" defaultValue="">
                <option disabled selected>
                  Select State
                </option>
                {states?.map((state, index) => (
                  <React.Fragment key={index}>
                    <option value={state.name.toLowerCase()}>{state.name}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span>Country</span>
              </label>
              <select
                className="input-control"
                name="country"
                defaultValue=""
                onChange={(e) => populateStates(e.target.value)}
              >
                <option disabled selected>
                  Select Country
                </option>
                {countries.map((country, index) => (
                  <React.Fragment key={index}>
                    <option value={country.name.toLowerCase()}>{country.name}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Social Media Contact Section */}
        <div className="py-6 border-b-0 flex justify-start gap-16">
          <div className="px-8">
            <h3>Social Media Contact</h3>
          </div>
          <div className="w-3/6">
            <div className="form-control">
              <label className="label">
                <span>Facebook</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="facebook_profile"
                placeholder="Facebook.com/"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Whatsapp</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="whatsapp_profile"
                placeholder="wa.me//+234"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Instagram</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="instagram_profile"
                placeholder="instagram.com/"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Twitter</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="twitter_profile"
                placeholder="x.com/"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end py-16 px-24 gap-12">
          <button className="btn btn-ghost text-danger text-lg">Deactivate Account</button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
