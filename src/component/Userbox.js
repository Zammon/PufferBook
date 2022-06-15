import { render } from "@testing-library/react";
import React from "react";
import './../css/Userbox.css'


function Userbox() {

    return(
        <div className="Box-User-Nav">
            <div className="Box-In-Profile">
                <img />
                <div className="text-size">Your Profile</div>
            </div>
            <div className="Box-In-TopUP">
                <img />
                <div className="text-size">Top-Up</div>
            </div>
            <div className="Box-In-Upload">
                <img />
                <div className="text-size">Upload</div>
            </div>
            <div className="Box-In-Setting">
                <img />
                <div className="text-size">Setting</div>
            </div>
            <div className="Box-In-LogOut">
                <img />
                <div className="text-size">Log out</div>
            </div>
        </div>
    )
}

export default Userbox