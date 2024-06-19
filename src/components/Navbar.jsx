import React from "react";
import Avatar from "react-avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white">
      <div className="flex w-[96%] py-3 justify-between items-center">
        <div className="flex items-center ">
          <GiHamburgerMenu size="24px" className="cursor-pointer" />
          <img className="px-4" width={"180px"} src={logo} alt="logo" />
        </div>

        <div className="flex w-[40%] items-center">
          <div className="flex w-[100%] ">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none"
            />
            <button className="py-2 border border-gray-400 rounded-r-full px-4">
              <CiSearch size="24px" />
            </button>
          </div>
        </div>

        <div className="flex w-[10%] justify-between items-center">
          <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
          <CiVideoOn size={"24px"} className="cursor-pointer" />
          <Avatar
            src="https://cdn4.sharechat.com/beautifulgirlprofilepicture_2fd82a95_1601311911497_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg"
            size={40}
            round={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
