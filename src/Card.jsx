import React from "react";

import { HiOutlineDotsVertical } from "react-icons/hi";
import './Card.css'

export default function Card(props) {
    console.log(props)
    return (
        <div class="cards">
            <div>
            <iframe width="100%" height="100%" src={props.video}>
            </iframe>

            </div>
            <div className="wrapper">
                <div className="card-icons">
                    <img src={props.img} alt="Akshay" />
                </div>
                <div className="title">
                    <h4>{props.title}</h4>
                    <p>{props.channel}</p>
                    <span>{props.views}</span><span>{props.years}</span>
                </div>
                <HiOutlineDotsVertical  style={{ fontSize: '24px' }}/>
            </div>
        </div>
       
    
    );
}
