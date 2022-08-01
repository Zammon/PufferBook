import React from "react";
import { useParams } from "react-router-dom";
import './../../css/Profile/profileUser.css';

function ProfileUser(props) {
    let {userID} = useParams();
    let {users} = props;
    let paramFill = users.filter((name)=> {return name.userName.includes(userID)})

    function ButtonSocial(){
        return(
            <div className="bio-right-social">
            
            </div>
        )
    }

    function RatingUser() {
        return(
            <div className="bio-left-rating">

                <div className="profileuser-rating-follower">

                    <div className="profileuser-rating-title">
                        Follower
                    </div>

                    <div className="rating-amount">
                        10
                    </div>

                </div>

                <div className="profileuser-rating-following">

                    <div className="profileuser-rating-title">
                        Following
                    </div>

                    <div className="rating-amount">
                        10
                    </div>

                </div>
                
                <div className="profileuser-rating-post">
                    
                    <div className="profileuser-rating-title">
                        Posts
                    </div>
                    
                    <div className="rating-amount">
                        10
                    </div>
               
               </div>
            </div>
        )
    }

    return(
        <div className="profileuser-container">
            <div className="profileuser-item-user">
                <img className="profileuser-img" src={paramFill[0].userProfile}/>
            </div>
            <div className="profileuser-item-cover">
                <img className="profileuser-img coverimg" src={paramFill[0].userCover}/>
            </div>
            <div className="profileuser-item-bio">
                <div className="item-bio-left">
                    <div className="bio-left-username">
                       {paramFill[0].userName}
                    </div>
                    <div className="bio-left-bio">
                        {paramFill[0].userBio}
                    </div>
                    <RatingUser />
                </div>
                <div className="item-bio-right">
                    <div className="bio-right-box-button">
                        <div className="bio-right-button-icon"></div>
                        <div className="bio-right-button-text">
                            Follow
                        </div>
                    </div>
                    <div className="bio-right-box-social">
                        <ButtonSocial />
                        <ButtonSocial />
                        <ButtonSocial />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser;