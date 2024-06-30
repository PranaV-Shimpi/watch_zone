import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn, CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, setCategory, setSearchSuggestion } from "../utils/appSlice";
import axios from "axios";
import logo from '../assets/logo.png';
import { SEARCH_SUGGESTIONS_API } from "../constant/youtube";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Navbar = () => {
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate hook
    const { searchSuggestion } = useSelector((store) => store.app);

    const searchVideo = () => {
        dispatch(setCategory(input));
        setInput("");
        // Navigate to "/" with search query
        navigate(`/?search=${encodeURIComponent(input)}`);
    }

    const toggleHandler = () => {
        dispatch(toggleSidebar());
    }

    const showSuggestion = async () => {
        try {
            const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
            dispatch(setSearchSuggestion(res?.data[1]))
        } catch (error) {
            console.log(error);
        }
    }

    const openSuggestion = () => {
        setSuggestion(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            showSuggestion();
        }, 200)

        return () => {
            clearTimeout(timer);
        }

    }, [input])

    return (
        <div className="flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white">
            <div className="flex w-[96%] py-3 justify-between items-center">

                <div className="flex items-center">
                    <GiHamburgerMenu onClick={toggleHandler} size="24px" className="cursor-pointer" />
                    <img className="px-4" width={"150px"} src={logo} alt="yt_logo" />
                </div>
                <div className="flex w-[40%] items-center">
                    <div className="flex w-[100%]">
                        <input
                            value={input}
                            onFocus={openSuggestion}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none"
                        />
                        <button
                            onClick={searchVideo}
                            className="py-2 border border-gray-400 rounded-r-full px-4"
                        >
                            <CiSearch size="24px" />
                        </button>
                    </div>
                    {suggestion && searchSuggestion.length !== 0 && (
                        <div className="absolute top-3 z-50 w-[30%] py-5 bg-white shadow-lg mt-12 rounded-lg border border-gray-200">
                            <ul>
                                {searchSuggestion.map((text, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center px-4 hover:bg-gray-100"
                                        onClick={() => {
                                            setInput(text);
                                            searchVideo();
                                        }}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <CiSearch size="24px" />
                                        <li className="px-2 py-1 cursor-pointer text-md font-medium">
                                            {text}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="flex w-[10%] justify-between items-center">
                    <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
                    <CiVideoOn size={"24px"} className="cursor-pointer" />
                    <Avatar
                        src="https://cdn4.sharechat.com/beautifulgirlprofilepicture_2fd82a95_1601311911497_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg"
                        size={35}
                        round={true}
                    />
                </div>

            </div>
        </div>
    );
}

export default Navbar;
