import moment from "moment";

import Appartment1 from "../../../assets/apartment1.png";
import Appartment2 from "../../../assets/apartment2.png";
import Appartment3 from "../../../assets/apartment3.png";
import DefaultUser from "../../../assets/default-user.png";
import {
  default as NotifAvatar1,
  default as NotifAvatar3,
} from "../../../assets/notif-avatar1.png";
import NotifAvatar2 from "../../../assets/notif-avatar2.png";
import NotificationCard from "./NotificationCard";

const Notifications = () => {
  return (
    <div className="bg-accent5 h-screen mt-8">
      <section className=" p-8">
        <div className="w-8/12 mx-auto pt-3">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Notification</h2>
            <button className="btn-link text-primary font-semibold text-lg">
              Mark all as read
            </button>
          </div>

          <div className="bg-white my-4">
            <NotificationCard
              subject="Emmett Perry"
              message="Just messaged you. check the message in message tab."
              date={moment().fromNow()}
              imgSrc={DefaultUser}
            />
            <NotificationCard
              subject="Geraldo"
              message="Just giving 5 Star review on your listing Kings Apartment"
              date={moment().fromNow()}
              imgSrc={NotifAvatar1}
              appartmentImgSrc={Appartment1}
              isUnread={true}
            />
            <NotificationCard
              subject="Emmett Perry"
              message="Just messaged you. check the <b>message</b> in message tab."
              date={moment().fromNow()}
              imgSrc={NotifAvatar2}
              appartmentImgSrc={Appartment2}
            />
            <NotificationCard
              subject="Emmett Perry"
              message="Just messaged you. check the message in message tab."
              date={moment().fromNow()}
              imgSrc={NotifAvatar3}
              appartmentImgSrc={Appartment3}
              isUnread={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
