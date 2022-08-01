import React from "react";
import './../../css/Reading/Comments.css';
import account from './../../Objects/Users';


function Comments(props) {
    
    function PostCommet() {
        return(
            <div className="comment-item-top">
                    <h2 className="comment-item-top-title">
                        Comment
                    </h2>
                    <div className="comment-item-top-user">
                        <div className="top-user-Imgs">
                            <img className="top-img-100p" src={account[1].userProfile} />
                        </div>
                        <textarea className="top-user-Textbox" placeholder="type your text here!"></textarea>
                        <div className="top-user-button">
                            Post
                        </div>
                    </div>
               </div>
            );
    }

    function CommentAll() {
        return(
            <div className="comment-item-bot-user">
                        <div className="bot-user-left">
                            
                        </div>
                        <div className="bot-user-center">
                            <div className="bot-user-center-name">
                                Username
                            </div>
                            <div className="bot-user-center-text">
                                TextComment 
                            </div>
                        </div>
                        <div className="bot-user-right">
                            
                        </div>
                    </div>
        );
    }
    
    return(
        <div className="comment-container">
            <div className="comment-item">
               <PostCommet />
               <div className="comment-item-bot">
                    <div className="comment-item-bot-title">
                        {"Comment all (0) "}
                    </div>
                    <CommentAll/> 
               </div>
            </div>
        </div>
    );
}

export default Comments;