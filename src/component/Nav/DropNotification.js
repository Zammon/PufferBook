import React, { useState } from "react";
import './../../css/Nav/DropNotification.css'
import notificationImargin from './../../imagins/Profile_img.png'

function DropNotification(props) {
    
    // const notiMap = 

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    
    let totoallTimg = `${h}:${m}`

    function ItemNotification(props) {
        return(
            <div className="notification-post">
                <div className="post-item-left">
                    <img src={notificationImargin} className="img-test" />
                </div>
                <div className="post-item-right">
                    <div className="post-item-top">
                        <div className="post-item-username">
                            {props.users}
                        </div>
                        <div className="post-item-timeline">
                            {totoallTimg}
                        </div>
                    </div>
                    <div className="post-item-bottom">
                        <div className="post-item-status">
                            Upload {props.names} next EP.
                        </div>
                    </div>
                </div>
            </div>
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
            <ItemNotification />
        </div>
    </div>
    );
}

export default DropNotification