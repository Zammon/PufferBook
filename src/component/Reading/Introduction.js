import React from "react";
import './../../css/Reading/Introduction.css';
import {useParams} from 'react-router-dom';

function Introduction(props) {
    const { product } = props;
    const a = ["รักโรแมนติก","LGBTQ+","วัยรุ่น"];
    const { postID } = useParams();
    const IdexNO = postID-1 ;
    /* CoverBook */
    function Coverbook(props) {
        return(
            <div className="introduction-item-coverbook">
                <img className="img100" src={props.coverbooks}/>
            </div>
        );
    };

    /* TypeBook */
    function TypeBook(props) {
        return(
        <div className="introduction-item-boxtype">
            {props.children}
        </div>
        );
    };

    const typesmap = a.map((types,index)=>{
            return <InTypename key={index} typename={types} />
        });

    function InTypename(props) {
        const {typename} = props;
        return(
            <div className="introduction-item-type">
                <h4>{typename}</h4>
            </div> 
            );
    }

    /* UserProfile */
    function Userprofile(props) {
        return(
            <div className="introduction-bot-boxuser">
                {/* User Profile */}
                <div className="introduction-item-userprofile">
                    <img className="img100" src={props.userprofile}/>
                </div>
                {/* User Name */}
                <div className="introduction-item-username">
                    {props.username}
                </div>
            </div>
        );
    };

    /* NameBook */
    function Namebook(props) {
        return(
            <div className="introduction-bot-boxbook">
                        <div className="introduction-item-bookname">
                            {props.namebook}
                        </div>
                        <div className="introduction-item-syn">
                            {props.syn} 
                        </div>
                        <div className="introduction-item-boxfollow">
                            <div className="introduction-item-followbook">
                                ติดตาม
                            </div>
                        </div> 
                    </div>
        );
    };

    /* Rating */
    function Ratings(props) {
        return(
                    <div className="introduction-bot-boxrating">
                        <div className="introduction-bot-view">
                            <h4 className="rating-title">View</h4>
                            <h5 className="rating-count">{props.views}</h5>
                        </div>
                        <div className="introduction-bot-follow">
                            <h4 className="rating-title">follow</h4>
                            <h5 className="rating-count">{props.follows}</h5>
                        </div>
                        <div className="introduction-bot-like">
                            <h4 className="rating-title">Likes</h4>
                            <h5 className="rating-count">{props.likes}</h5>
                        </div>
                    </div>
        );
    };

    /* Return Main */
    return(
        <div className="introduction-container">
            <div className="container-center">
               {/* Top */}
                <div className="introduction-item-top">
                    <div className="introduction-item-top-left">
                        <h2>Introduction</h2> 
                    </div>
                </div>
            {/* Bottom */} 
            <div className="introduction-item-bot">
                {/* Bottom-Left  -------------------------------------------------------*/}
                <div className="introduction-item-bot-left">
                    {/* Img book */}
                    <Coverbook coverbooks={product[IdexNO].imgs}/> {/* Pull => coverbooks */}
                    <TypeBook>
                        {typesmap}
                    </TypeBook>
                </div>
                {/* Bottom-Right -------------------------------------------------------*/}
                <div className="introduction-item-bot-right">
                    <Userprofile userprofile={product[IdexNO].user.userprofile} username={product[IdexNO].user.username} /> {/* Pull => userprofile, username */}
                    <Namebook namebook={product[IdexNO].name} syn={product[IdexNO].synopsis}/> {/* Pull => namebook, syn */}
                    <Ratings views={product[IdexNO].rating.views} follows={product[IdexNO].rating.follows} likes={product[IdexNO].rating.likes}/> {/* Pull => views, follows, likes */}
                </div>
            </div> 
            </div>
            
        </div>
    );
}

export default Introduction;