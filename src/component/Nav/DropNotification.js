import React, { useEffect, useState } from "react";
import './../../css/Nav/DropNotification.css';
import notifications from './../../imagins/Profile_img.png';
import { notificationsob } from "../../Objects/Novels";
import { Link } from "react-router-dom";

function DropNotification(props) {
    let today = new Date();
    let h = '0' + today.getHours();
    let m = '0' + today.getMinutes();
    let totoallTimg = `${h}:${m}`

    useEffect(()=>{
        
    },[])

    const notiMap = notificationsob.map((noveldata, indexs)=>{
        return <ItemNotification key={indexs} novel={noveldata}/>
    })

    function ItemNotification(props) {
        const {novel} = props;

        return(
            <Link to={`/read/${novel.id}`} className="notification-post noneunder">
                <div className="post-item-left">
                    <img src={novel.user.userprofile} className="img-test" />
                </div>
                <div className="post-item-right">
                    <div className="post-item-top">
                        <div className="post-item-username colortextDropNotification">
                            {novel.user.username}
                        </div>
                        <div className="post-item-timeline colortextDropNotification">
                            {totoallTimg}
                        </div>
                    </div>
                    <div className="post-item-bottom">
                        <div className="post-item-status">
                            Upload {novel.name} next EP.
                        </div>
                    </div>
                </div>
            </Link>
        );
    } 

    
    return(
    <div className="notification-container">
        <div className="notification-item-left">
        </div>
        <div className="notification-item-center">
        </div>
        <div className="notification-item-right">
            <div className="notification-title">
                Notification
            </div>
            {notiMap}
        </div>
    </div>
    );
}

export default DropNotification