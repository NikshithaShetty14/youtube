import React from "react"
import { HiBars3 } from "react-icons/hi2";
import Logo from "./logo.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import './Header.css';

export default function Header({ onToggle }) {
    return (
        <div className="header">
            <div className="sub-header">
                <HiBars3 style={{ fontSize: '25px' }} onClick={onToggle}/>
                <img src={Logo} alt="Youtube_logo" className="logo" />
            </div>

            <div className="sub-header search-header">
                <div className="searchbox">
                <input type="text" placeholder="Search" className="searchtext" />
                <CiSearch style={{ fontSize: '25px' }} className="searchicon" />
                </div>
                <IoMdMic style={{ fontSize: '25px' }} />
            </div>

            <div className="sub-header">
                <MdOutlineVideoCall style={{ fontSize: '25px' }}  />
                <CiBellOn style={{ fontSize: '25px' }} />
                <IoPersonCircleOutline style={{ fontSize: '25px' }} />
            </div>
        </div>

    )
}