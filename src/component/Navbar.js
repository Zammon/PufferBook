import React, {Component, useEffect, useState} from "react";
import DropdownUser from './DropdownUser'
import vector from './../imagins/Vector.png';
import coins from './../imagins/Coins.png';
import notification from './../imagins/Notification.png';
import cloud from './../imagins/Cloud.png';
import userprofile from './../imagins/Profile_Peotal.png';
import logo from './../imagins/Logo.png'
import './../css/Navbar.css';
import './../css/DropdownUser.css'
import Wallet from "./Wallet";

{/*Navbar Component*/} 
function Navbar() {
    const num = '$1500';
    let [opendrop, setOpendrop] = useState(false);
    
    let [inDropdown,setIndropdown] = useState('');
    let [actives, setActives] = useState('');
    
    let [walletdrop, setWalletdrop] = useState('');
    let [walletsCoin, setwalletsCoin] = useState('');
    
    function clickDropdown(bu) {
         if(bu){
                setIndropdown(<DropdownUser />);
                setActives('-active');
                setOpendrop(true);
         } else {
                setIndropdown('');
                setActives('');
                setOpendrop(false);
         }
        
    }

    function hoverDropdown(bu){
        if(bu){
            setwalletsCoin(<Wallet />);
            setWalletdrop(bu);
        } else {
            setwalletsCoin('');
            setWalletdrop(false);
        }
    }

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
                <img className="coins-Nav" src={coins} onMouseEnter={()=>hoverDropdown(true)} onMouseLeave={()=>hoverDropdown(false)} />
                <div className="div-coins mar-top" style={{color:"white"}}> {`:${num}`} </div>
            </div>
            <img className="cloud-Nav" src={cloud} />
            <img className="notification-Nav item-child" src={notification} />
            <img className={`profile-user${actives}`} src={userprofile} onClick={()=>clickDropdown(!opendrop)}/>
            {walletsCoin}
            {inDropdown}
        </div>
    </div>
    </>
    );
}

export default Navbar 