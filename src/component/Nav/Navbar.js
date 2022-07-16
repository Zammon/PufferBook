import React, {Component, useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
/*Component*/
import DropdownUser from './DropdownUser';
import Wallet from "./Wallet";
import DropSearch from "./DropSearch";
import DropNotification from "./DropNotification";
import { notificationsLength } from "../../Objects/Novels";
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
    let [noticount, setNotiCount] = useState(true);

    /* useRef */
    const userdropRef = useRef('');
    const searchdropRef = useRef('');
    const notificationdropRef = useRef('');
    
    /* useEffect */
    /* User */
    useEffect(()=>{
            let hangdleruser = (event) => {
                if(!userdropRef.current.contains(event.target)){
                    onClickDropUser(false)
                }
            }
                document.addEventListener("mousedown", hangdleruser)
            return ()=>{
                document.removeEventListener("mousedown", hangdleruser)
            }
    },[]);

    /* Search */
    useEffect(()=>{
        let hangdlersearch = (event) => {
            if(!searchdropRef.current.contains(event.target)){
                onClickDropSearch(false)
            }
        }
            document.addEventListener("mousedown", hangdlersearch)
        return ()=>{
            document.removeEventListener("mousedown", hangdlersearch)
        }
    },[]);

    /* Notification */
    useEffect(()=>{
        let hangdlernotification = (event) => {
            if(!notificationdropRef.current.contains(event.target)) {
                onClickDropNotification(false)
            }
        }
            document.addEventListener("mousedown", hangdlernotification)
        return ()=>{
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
    function onClickDropNotification(props,status) {
        if(props){
            setDropnoti(<DropNotification />);
            setOpenNotiDrop(true);
            setNotiCount(status);
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
            <Link to="/" className="item-child-left">Home</Link>
            <Link to="/novel" className="item-child-left ad">Novel</Link>
            <Link to="/comic" className="item-child-left">Commic</Link>
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
            <Link to="/upload"><img className="cloud-Nav" src={cloud} /></Link>
            <div ref={notificationdropRef} onClick={()=>onClickDropNotification(!opennotidrop,false)} className="notification-setting-size">
                {dropnoti}
                <div className="reletive">
                <img className="notification-Nav" src={notification} /> 
                <div className={`notification-amount${noticount ? '':'-nonedis'}`}>
                    {noticount ? notificationsLength:''} 
                </div>   
                </div>
            </div>
            <div ref={userdropRef} className="boxsRef">
                <img className={`profile-user${actives}`} src={userprofile} onClick={()=>onClickDropUser(!opendrop)}/>
                {dropuser}
            </div>
        </div>
    </div>
    </>
    );
}

export default Navbar 