import { FaRegNewspaper, FaRegBell } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import image15 from "./Images/User profile.png";
import image16 from "./Images/User profil.png";
import image17 from "./Images/Polygon 1.png";
import image18 from "./Images/Polygon 18.png";
import image19 from "./Images/Polygon 19.png";
import image20 from "./Images/Union.png";
import image21 from "./Images/icons8-twitter-circled-48.png";
import "./index.css";

const RightContent = () => {
  const users = [
    {
      id: 1,
      avatar: image16,
      username: "Anne Couture",
      active: "5 min ago",
    },
    {
      id: 2,
      avatar: image17,
      username: "Miriam Soleil",
      active: "20 min ago",
    },
    {
      id: 3,
      avatar: image18,
      username: "Mark Laval",
      active: "35 min ago",
    },
    {
      id: 4,
      avatar: image19,
      username: "Mark Morain",
      active: "40 min ago",
    },
  ];

  const followers = [
    {
      id: 1,
      avatar: image20,
      text: "@aksondesign",
    },
    {
      id: 2,
      avatar: image21,
      text: "aksonvady",
    },
  ];

  return (
    <>
      <div className="w-56 bg- h-full bg-gray-600 rounded-r-xl overflow-clip">
        <div className="w-full p-3 flex justify-evenly items-center bg-gray-600/50 border-b border-white/40 text-white/40">
          <FaRegNewspaper /> <FaRegBell /> <FiMessageCircle />{" "}
          <IoSettingsOutline />
        </div>
        <div className="p-5 w-full">
          {/* profile */}
          <div className="w-full flex items-center justify-center h-60 space-y-5 flex-col">
            <img src={image15} className="w-24" />
            <div className="text-center text-white">
              <p className="font-medium">Sophie Fortune</p>
              <p className="text-light text-white/50">@sophiefortune</p>
            </div>
          </div>
          {/* New members */}
          <div>
            <div className="w-full flex justify-between items-baseline space-y-2">
              <p className="text-sm text-white/50">New Members</p>
              <p className="text-xs text-white/20">See all</p>
            </div>
            <div className="space-y-2">
              {users.map((u) => (
                <div className="w-full bg-gray-800/50 flex space-x-2 p-2 rounded items-center">
                  <img src={u.avatar} className="w-8 h-auto" />
                  <div>
                    <p className="text-white font-medium">{u.username}</p>
                    <p className="text-xs text-white/50">{u.active} ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*follow us*/}
          <div>
            <div className="w-full flex justify-between items-baseline space-y-2 mt-15">
              <p className="text-sm text-white/50">Follow Me</p>
            </div>
            <div className="space-y-2">
              {followers.map((f) => (
                <div className="w-full bg-gray-800/50 flex space-x-2 p-2 rounded items-center">
                  <img src={f.avatar} className="w-8 h-auto" />
                  <div>
                    <p className="text-white font-medium underline">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightContent;
