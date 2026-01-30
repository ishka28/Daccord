import banner from "./Images/banner.png";
import image1 from "./Images/Group Img.png";
import image2 from "./Images/Group Img2.png";
import image3 from "./Images/Avatar1.png";
import image4 from "./Images/Avatar2.png";
import { BsPersonFillCheck, BsPersonFillGear } from "react-icons/bs";
import image5 from "./Images/Group Img3.png";
import image6 from "./Images/Img.png";
import image7 from "./Images/Polygon 16.png";
import image8 from "./Images/7.png";
import image9 from "./Images/Group Img4.png";
import image10 from "./Images/Group Img5.png";
import image11 from "./Images/Group Img6.png";
import image12 from "./Images/Polygon 17.png";
import image13 from "./Images/Avatar.png";
import image14 from "./Images/Avatar3.png";

const FeaturedCards = ({ img, logo, title, text, active, members }) => {
  return (
    <>
      <div className="w-2xs h-fit rounded-xl overflow-clip relative flex items-center justify-center shadow-xl">
        <img src={img} className="object-cover" />
        <div className="absolute bottom-0 h-[60%] w-full bg-purple-950/80 text-white p-2 space-y-2 rounded-t-xl backdrop-blur-lg ">
          <p className="text-xl">{title}</p>
          <p className="text-xs text-white/50 ">{text}</p>
          <div className="flex items-center w-full justify-between text-white/40">
            <div className="flex gap-2 items-center">
              <BsPersonFillGear size={10} />
              <p className="text-xs">{active} online</p>
            </div>
            <div className="flex gap-2 items-center">
              <BsPersonFillCheck size={10} />
              <p className="text-xs">{members} members</p>
            </div>
          </div>
        </div>
        <img src={logo} className="absolute top-[30%]" />
      </div>
    </>
  );
};
const features = [
  {
    id: 1,
    img: image1,
    logo: image3,
    title: "Virtual Reality",
    text: "A community for VR and novices alike, regular and friendly chat.",
    active: 5678,
    members: 345678,
  },
  {
    id: 2,
    img: image2,
    logo: image4,
    title: "Virtual Reality",
    text: "A community for VR and novices alike, regular and friendly chat.",
    active: 5678,
    members: 345678,
  },
];

{
  /*popular*/
}
const PopularRightNow = ({ img, logo, title, text, members }) => {
  return (
    <>
      <div className="w-2xs h-fit rounded-xl overflow-clip relative flex items-center  shadow-xl">
        <img src={img} className="w-1/2" />
        <div className="absolute bottom-0 right-0 h-full w-2/3 bg-gray-700/80 text-white p-2 space-y-2 rounded-t-xl backdrop-blur-lg flex flex-col justify-center pl-10">
          <p className="text-xl">{title}</p>
          <p className="text-xs text-white/50">{text}</p>
          <div className="flex-items-center w-full justify-between text-white/40 align-baseline">
            <div className="flex gap-2 items-center">
              <BsPersonFillCheck size={10} />
              <p className="text-xs">{members} members</p>
            </div>
          </div>
          <div>
            <img src={logo} className="absolute -left-10 top-10" />
          </div>
        </div>
      </div>
    </>
  );
};
const popular = [
  {
    id: 1,
    img: image5,
    logo: image7,
    title: "3D Art",
    text: "A great place to discuss art.",
    members: 345678,
  },
  {
    id: 2,
    img: image6,
    logo: image8,
    title: "NFT",
    text: "An NFT community so that everyone can share their NFTs.",
    members: 887789,
  },
];

const RecentAdd = ({ img, logo, title, text, members }) => {
  return (
    <>
      <div className="w-1/3 h-fit rounded-xl overflow-clip relative flex items-center justify-center shadow-xl">
        <img src={img} className="object-cover" />
        <div className="absolute bottom-0 h-[70%] w-full bg-gray-700/80 text-white p-2 space-y-1 rounded-t-xl backdrop-blur-lg">
          <p className="text-sm">{title}</p>
          <p className="text-xs text-white/50">{text}</p>
          <div className="flex items-center w-full justify-between text-white/40">
            <div className="flex gap-2 items-center">
              <BsPersonFillGear size={10} />
              <p className="text-xs ">{members} members</p>
            </div>
          </div>
        </div>
        <img src={logo} className="absolute top-[20%] right-5 w-10 h-10" />
      </div>
    </>
  );
};

const recent = [
  {
    id: 1,
    img: image9,
    logo: image12,
    title: "Movie recapped",
    text: "Discuss your favourite movies and TV series here.",
    members: 3,
  },
  {
    id: 2,
    img: image10,
    logo: image13,
    title: "Movie recapped",
    text: "Discuss your favourite movies and TV series here.",
    members: 3,
  },
  {
    id: 3,
    img: image11,
    logo: image14,
    title: "Movie recapped",
    text: "Discuss your favourite movies and TV series here.",
    members: 3,
  },
];

const MiddleMenu = () => {
  return (
    <>
      <div className="w-1/3 h-full bg-gray-800 overflow-auto hide-scrollbar">
        {/*search bar */}
        <div className="w-full p-2 flex justify-center items-center bg-gray-600/50">
          <input
            type="text"
            className="border border-white/50 text-center flex items-center w-2/3 rounded"
            placeholder="🔍  Explore"
            defaultValue={"🔍 Explore"}
          />
        </div>
        {/*Banner*/}
        <div className="p-5 w-full space-y-2">
          <div className="w-full rounded-xl relative h-fit overflow-clip flex items-center justify-center">
            <img src={banner} />
            <p className="absolute font-medium text-white text-center w-1/2 text-xl">
              Find Your Community
              <br />
              On Daccord
            </p>
          </div>
          {/*Features*/}
          <div className="mt-5 w-full flex justify-between items-baseline">
            <p className="text-xl text-white font-medium">Featured Community</p>
            <p className="text-sm text-white/20">See all</p>
          </div>
          <div className="flex justify-between gap-5">
            {features.map((features) => (
              <FeaturedCards
                img={features.img}
                title={features.title}
                logo={features.logo}
                text={features.text}
                active={features.active}
                members={features.members}
              />
            ))}
          </div>
          {/*popular*/}
          <div className="mt-5 w-full flex justify-between items-baseline">
            <p className="text-xl text-white font-medium">Popular Right Now</p>
            <p className="text-sm text-white/20">See all</p>
          </div>
          <div className="flex justify-between gap-5">
            {popular.map((popular) => (
              <PopularRightNow
                img={popular.img}
                title={popular.title}
                logo={popular.logo}
                text={popular.text}
                members={popular.members}
              />
            ))}
          </div>
          {/*recent add*/}
          <div className="mt-5 w-full flex justify-between items-baseline">
            <p className="text-xl text-white font-medium">Recent Add</p>
            <p className="text-sm text-white/20">See all</p>
          </div>
          <div className="flex justify-between gap-5">
            {recent.map((recent) => (
              <RecentAdd
                img={recent.img}
                title={recent.title}
                logo={recent.logo}
                text={recent.text}
                members={recent.members}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MiddleMenu;
