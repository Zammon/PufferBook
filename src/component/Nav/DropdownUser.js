import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React,{ Component, useState } from "react";
import userIcon from './../../imagins/userIcon.png';
import topUpIcon from './../../imagins/topUpIcon.png';
import bookmarkIcon from './../../imagins/bookmarkIcon.png';
import settingIcon from './../../imagins/settingIcon.png';
import logOutIcon from './../../imagins/logoutIcon.png';

import './../../css/Nav/DropdownUser.css'
import { Link, NavLink } from "react-router-dom";

function DropdownUser() {
    const titleDrop = [
        {
            icons: userIcon,
            titleName: 'Your Profile'
        },
        {
            icons: topUpIcon,
            titleName: 'Top-Up'
        },
        {
            icons: bookmarkIcon,
            titleName: 'Book Mark'
        },
        {
            icons: settingIcon,
            titleName: 'Setting'
        },
        {
            icons: logOutIcon,
            titleName: 'Log out'
        },
    ]
        
    /*ขอบเขตของ dropdown*/
    function DropdownBox(props){
        return (
        <div className="dropdown-container">
            <ul className="dropdown-line">
                {props.children}
            </ul>
        </div>
        );
    }
    
    /*เอาไว้ map ค่าที่อยู่ใน titleDrop*/
     let items = titleDrop.map((e,index)=>{
         return(<DropdownItem key={index} title={e} indexs={index} />);
    }); 
    

    /*item ใน dropdown*/ 
    function DropdownItem(props){
        const {title} = props;
        if(title.titleName=='Your Profile') {
           return(
                    <Link to="/profile" className="dropdown-item setDropuser">
                        <img className="dropdown-item-left" src={props.title.icons} />
                        <h4 className="dropdown-item-center">{props.title.titleName}</h4>
                        <div className="dropdown-item-right"></div>
                    </Link>
           )
        } else if(title.titleName=='Top-Up') {
            return(
                    <Link as={Link} to="/top-up" className="dropdown-item setDropuser">
                        <img className="dropdown-item-left" src={props.title.icons} />
                        <h4 className="dropdown-item-center">{props.title.titleName}</h4>
                        <div className="dropdown-item-right"></div>
                    </Link>
           )
        } else if(title.titleName=='Book Mark') {
            return(
                    <Link as={Link} to="/bookmark" className="dropdown-item setDropuser">
                        <img className="dropdown-item-left" src={props.title.icons} />
                        <h4 className="dropdown-item-center">{props.title.titleName}</h4>
                        <div className="dropdown-item-right"></div>
                    </Link>
           )
        } else if(title.titleName=='Setting') {
            return(
                    <Link as={Link} to="/setting" className="dropdown-item setDropuser">
                        <img className="dropdown-item-left" src={props.title.icons} />
                        <h4 className="dropdown-item-center">{props.title.titleName}</h4>
                        <div className="dropdown-item-right"></div>
                    </Link>
           )
        } else if(title.titleName=='Log out') {
            return(
                    <Link as={Link} to="/logout" className="dropdown-item setDropuser noneborder">
                        <img className="dropdown-item-left" src={props.title.icons} />
                        <h4 className="dropdown-item-center">{props.title.titleName}</h4>
                        <div className="dropdown-item-right"></div>
                    </Link>
           )
        }
    }   

    /*ส่งค่าไปที่หัว component*/ 
    return(
           <DropdownBox>
            {items}
           </DropdownBox> 
    )
}

export default DropdownUser