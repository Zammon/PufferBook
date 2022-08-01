import React from "react";
import './../../css/Profile/profile.css';
import { useParams } from 'react-router-dom';

import account from "../../Objects/Users";

import Footer from "../Foot/Footer";
import ProfileUser from './ProfileUser';
import MenuUser from "./MenuUser";


function Profile() {
    return(
        <>
            <div className="profile-container">
                <div className="profile-item">
                    <ProfileUser users={account}/>
                    <MenuUser />
                </div>
                <div className="profile-area">
                    
                </div>
            </div>
        </>
        
    );
}

export default Profile;