import logo from "./Images/Logo.png";
import group1 from "./Images/Group_1163.png";
import group2 from "./Images/Group_2.png";
import group3 from "./Images/image1.png";
import group4 from "./Images/image2.png";
import user from "./Images/User profile.png"

import { GoPlus } from "react-icons/go";
import { FaCompass } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { IoHeadsetSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";

const LeftMenu = () => {
  const Channels = [
    {
      id: 1,
      name: "group1",
      icon: group1,
    },
    {
      id: 2,
      name: "group2",
      icon: group2,
    },
    {
      id: 3,
      name: "group3",
      icon: group3,
    },
    {
      id: 4,
      name: "group4",
      icon: group4,
    },
  ];

  const Options = [
    {
      id: 1,
      option: "Home",
      icon: <FaCompass />,
    },
    {
      id: 2,
      option: "Music",
      icon: <FaMusic/>,
    },
    {
      id: 3,
      option: "Gaming",
      icon: <FaGamepad />,
    },
    {
      id: 4,
      option: "Education",
      icon: <FaGraduationCap />,
    },
    {
      id: 5,
      option: "Science & Tech",
      icon: <TbWorld />,
    },
    {
      id: 6,
      option: "Entertainment",
      icon: <FaPlayCircle />,
    },
    {
      id: 7,
      option: "Student Hubs",
      icon: <FaRobot />,
    },
  ];
  return (
    <>
      {/*Left menu left bar */}
      <div className="w-16 bg-[#98a2ff7c] h-full rounded-l-xl p-2 border-r border-purple-200 relative">
        <img src={logo} className="w-full my-2" />
        {/*Channels*/}
        <div className="w-14 bg-purple-950/50 absolute right-0 p-4 rounded-l-full border-l border-purple-200 space-y-5 py-12">
          {/*Channel container*/}
          {Channels.map((channel) => (
            <div className="w-8 h-8 rounded-full bg-black space-y-5 flex justify-center items-center overflow-clip">
              <img src={channel.icon} className="w-full" />
            </div>
          ))}
          <button className="w-8 h-8 rounded-full bg-purple-950/50 text-purple-300/50 space-y-5 flex justify-center items-center overflow-clip">
            <GoPlus size={20} />
          </button>
        </div>
      </div>
      {/*Options*/}

      <div className="w-56 bg-[#2c2f484b] h-full flex flex-col">
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <div className="w-full p-2 px-4 text-white font-medium border-b border-purple-200/50">
            Explore
          </div>
          <div className="p-2 px-4 space-y-2">
            {Options.map((option) => (
              <div
                key={option.id}
                className="w-full rounded gap-2 flex items-center text-white p-2"
              >
                {option.icon} <p>{option.option}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 border-t border-purple-200/50">
          {/*Volume bar*/}
          <div className="h-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-md mb-3 flex items-center justify-center text-xs text-white/70">
            🎵 Volume
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={user} alt="user" className="w-8 h-8 rounded-full" />
              <div className="text-xs text-white">
                <p className="font-medium">sophiefortune</p>
              </div>
            </div>
            <div className="flex space-x-2 text-white/60">
              <FaMicrophone className="cursor-pointer hover:text-white" />
              <IoHeadsetSharp className="cursor-pointer hover:text-white" />
              <TiUserAdd className="cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftMenu;
