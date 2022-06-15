import React, {Component} from "react";
import vector from './../imagins/Vector.png';
import coins from './../imagins/Coins.png';
import notification from './../imagins/Notification.png';
import cloud from './../imagins/Cloud.png';
import userprofile from './../imagins/Profile_Peotal.png';
import logo from './../imagins/Logo.png'
import './../css/Navbar.css';
import './../css/Userbox.css'

function Navbar() {
    const num = '---';
    

    return(
    <>
    <div className='navbar-full'>
        <div className="item-left">
            <img className="logo-Nav item-child" src={logo}/>
            <div className="item-child-left" >Novel</div>
            <div className="item-child-left ad" >E-Book</div>
            <div className="item-child-left" >Commic</div>
        </div>
        <div className='item-center'>
            <img className="vector-Nav" src={vector} />
            <input className="input-search" type='input' placeholder='Search...'/>
        </div>
        <div className='item-right'>
            <div className="box-coins">
                <img className="coins-Nav" src={coins} />
                <div className="div-coins mar-top" style={{color:"white"}}> {`:${num}`} </div>
            </div>
            <img className="cloud-Nav" src={cloud} />
            <img className="notification-Nav item-child" src={notification} />
            <img className="profile-user" src={userprofile} />
        </div> 
    </div>
    </>
    );
} 

export default Navbar 