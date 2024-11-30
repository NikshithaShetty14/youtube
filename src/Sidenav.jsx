import React, {useEffect, useState} from "react";
import './Sidenav.css';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";


export default function Sidenav({toggleEffect}) {

//     const [sideBarData, setSideBarData] = useState(true);

//    useEffect(()=>{
//     setSideBarData(toggleEffect);
//    },[toggleEffect]);

    return (
        <>
        {toggleEffect}
        <div className="navbar" style={ toggleEffect ? {"display":"none"} : {"display":"flex"} }>
            <div className="icons"><GoHomeFill style={{ fontSize: '24px' }} /><p className="para">Home</p></div>
            <div className="icons"><SiYoutubeshorts style={{ fontSize: '24px' }} /><p className="para">Shorts</p></div>
            <div className="icons"><MdSubscriptions style={{ fontSize: '24px' }} /><p className="para"> Subscription</p></div>
            <div className="icons"><MdOutlineVideoLibrary  style={{ fontSize: '24px' }} /><p className="para"> You</p></div>
            <div className="icons"><LiaDownloadSolid  style={{ fontSize: '24px' }} /><p className="para"> Downloads</p></div>
            </div>
            <div className="nav" style={ toggleEffect ? {"display":"block"} : {"display":"none"} }>
                <div className="navicons"> <GoHomeFill style={{ fontSize: '24px' }} /> <span>Home</span></div>
                <div className="navicons"><SiYoutubeshorts style={{ fontSize: '24px' }} /><span>Shorts</span></div>
                <div className="navicons"><MdSubscriptions style={{ fontSize: '24px' }} /><span> Subscription</span></div>
            </div>
            </>  
    )
}
