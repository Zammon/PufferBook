import React from "react";
import './../../css/Profile/MenuUser.css'
import {Link} from 'react-router-dom';


function PostsUser() {
    
    function MenuPost(){
        return(
        <div className="menuuser-button-ative menuuser-edit-font">
            POSTS
        </div>
        )
    }
    
    function MenuNovel(){
        return(
        <div className="menuuser-button menuuser-edit-font">
            NOVELS        
        </div>
        )
    }

    function MenuComic(){
        return(
        <div className="menuuser-button menuuser-edit-font">
            COMICS
        </div>
        )
    }

    function Poststatus() {
        return(
            <div className="menuuser-button-poststatus">
                <img />
                <div className="">POST STATUS</div>
            </div>
        )
    }

    return(
        <div className="menuuser-container">
            <div className="menuuser-item-menu">
                <MenuPost />
                <MenuNovel />
                <MenuComic /> 
            </div>
            <div className="menuuser-item-func">
               <Poststatus /> 
            </div>
        </div>
    );
}

export default PostsUser;