import React, {Component, useEffect, useRef, useState} from "react";
/*Component*/
import DropdownUser from './DropdownUser';
import Wallet from "./Wallet";
import DropSearch from "./DropSearch";
import DropNotification from "./DropNotification";
/*Css*/
import './../../css/Nav/Navbar.css';
import './../../css/Nav/DropdownUser.css';
/*Imgs*/
import vector from './../../imagins/Vector.png';
import coins from './../../imagins/Coins.png';
import notification from './../../imagins/Notification.png';
import cloud from './../../imagins/Cloud.png';
import userprofile from './../../imagins/Profile_Peotal.png';
import logo from './../../imagins/Logo.png'

/*Navbar Component*/
function Navbar() {
    /* Object */
    const num = '$1500';

    /* State */
    let [opendrop, setOpendrop] = useState(false);
    let [dropuser,setDropUser] = useState('');
    let [actives, setActives] = useState('');
    
    let [dropsearch, setDropSearch] = useState('');

    let [dropcoin, setDropCoin] = useState('');
    
    let [dropnoti, setDropnoti] = useState('');
    let [opennotidrop, setOpenNotiDrop] = useState(false);
    /* useRef */
    const userdropRef = useRef(null);
    const searchdropRef = useRef(null);
    const notificationdropRef = useRef(null);
    /* useEffect */
    useEffect(()=>{
            let hangdleruser = (event) => {
                if(!userdropRef.current.contains(event.target)){
                    onClickDropUser(false)
                }
            }
            
            let hangdlersearch = (event) => {
                if(!searchdropRef.current.contains(event.target)){
                    onClickDropSearch(false)
                }
            }

            let hangdlernotification = (event) => {
                if(!notificationdropRef.current.contains(event.target)){
                    onClickDropNotification(false)
                }
            }

                document.addEventListener("mousedown", hangdleruser)
                document.addEventListener("mousedown", hangdlersearch)
                document.addEventListener("mousedown", hangdlernotification)
            return ()=>{
                document.removeEventListener("mousedown", hangdleruser)
                document.removeEventListener("mousedown", hangdlersearch)
                document.removeEventListener("mousedown", hangdlernotification)
            }
        
    },[]);

    /* Function */
    /* Drop User */
    function onClickDropUser(props) {
         if(props){
                setDropUser(<DropdownUser />);
                setActives('-active');
                setOpendrop(true);
         } else {
                setDropUser('');
                setActives('');
                setOpendrop(false);
         }
    }
    /* Drop Search */
    function onClickDropSearch(props){
        if(props){
            setDropSearch(<DropSearch />);
     } else {
            setDropSearch('');
     }
    }

    /* Drop Coin */
    function onHoverDropCoin(props){
        if(props){
            setDropCoin(<Wallet />);
        } else {
            setDropCoin('');
        }
    }

    /* Drop Notification */
    function onClickDropNotification(props) {
        if(props){
            setDropnoti(<DropNotification />);
            setOpenNotiDrop(true);
        } else {
            setDropnoti('');
            setOpenNotiDrop(false);
        }
    }
    /* return main */
    return(
    <>
    <div className='navbar-full'>
        <div className="item-left">
            <img className="logo-Nav item-child" src={logo}/>
            <div className="item-child-left">Home</div>
            <div className="item-child-left ad">E-Book</div>
            <div className="item-child-left">Commic</div>
        </div>

        <div ref={searchdropRef} className='item-center'>
                <img className="vector-Nav" src={vector} />
                <input className="input-search" type='input' onClick={()=>onClickDropSearch(true)} placeholder='Search...'/>
                {dropsearch}
        </div> 
        <div className='item-right'>
            <div className="box-coins">
                <img className="coins-Nav" src={coins} onMouseEnter={()=>onHoverDropCoin(true)} onMouseLeave={()=>onHoverDropCoin(false)} />
                <div className="div-coins mar-top" style={{color:"white"}}> {`:${num}`} </div>
                {dropcoin}
            </div>
            <img className="cloud-Nav" src={cloud} />
            <div ref={notificationdropRef} onClick={()=>onClickDropNotification(!opennotidrop)} className="notification-setting-size">
                <div className="reletive">
                    <img className="notification-Nav" src={notification} /> 
                    <div className="notification-amount">
                        10
                    </div>   
                </div>
                {dropnoti}
            </div>
            <img ref={userdropRef} className={`profile-user${actives}`} src={userprofile} onClick={()=>onClickDropUser(!opendrop)}/>
                {dropuser}
        </div>
    </div>
    </>
    );
}

export default Navbar 