import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiHome3Line } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { TiWeatherShower } from "react-icons/ti";
import { GiGears } from "react-icons/gi";
import { IoLogoEuro } from "react-icons/io";
import { BiNews } from "react-icons/bi";
import {
  setCategory,
  setSelectedCategory,
  setFilteredVideos,
} from "../utils/appSlice";

const sidebarItem = [
  { icons: <RiHome3Line size="24px" />, title: "Home", category: "All" },
  { icons: <FaGamepad size="24px" />, title: "Gaming", category: "Gaming" },
  {
    icons: <IoMusicalNotesSharp size="24px" />,
    title: "Music",
    category: "Latest_Music",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
    category: "Shorts",
  },
  {
    icons: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
    category: "Subscriptions",
  },
  {
    icons: <AiOutlineShopping size="24px" />,
    title: "Shopping",
    category: "Shopping",
  },
  {
    icons: <BsFillCameraVideoFill size="24px" />,
    title: "Movies",
    category: "Movies",
  },
  {
    icons: <TiWeatherShower size="24px" />,
    title: "Weather",
    category: "Weather",
  },
  { icons: <GiGears size="24px" />, title: "Tech", category: "Tech" },
  { icons: <IoLogoEuro size="24px" />, title: "Finance", category: "Finance" },
  { icons: <BiNews size="24px" />, title: "News", category: "News" },
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    dispatch(setSelectedCategory(category));
    dispatch(setFilteredVideos([])); // Clear previous filtered videos

    if (window.location.pathname.includes("/watch")) {
      navigate("/");
    }
  };

  return (
    <div
      className={`relative left-0 ${
        open ? "w-[16%]" : "w-[6%]"
      } p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}
    >
      {sidebarItem.map((item, index) => (
        <div
          key={index}
          className="flex my-3 ml-2 cursor-pointer"
          onClick={() => handleCategoryClick(item.category)}
        >
          {item.icons}
          <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
