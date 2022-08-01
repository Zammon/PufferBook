import React from "react";
import { useParams } from "react-router";
import './../../css/Reading/ListEpisodes.css'

function ListEpisodes(props) {
    
    const { postID } = useParams();
    const IdexNO = postID-1 ;

    function EpisodeItem(props) {
        return(
            <div className="listEp-episode-ep-item">
                <div className="item-ep-num"> {props.number} </div>
                <div className="item-ep-bookname"> Hello World ... </div>
                <div className="item-ep-date"> Mar 18, 2020 </div>
                <div className="item-ep-like"> 8.0K </div>
                <button className="item-ep-button"> 
                    <div className="">
                        View
                    </div>
                </button>
            </div>
        )
    }

    return(
        <div className="listEp-container">
            <div className="listEp-items">
                <h2 className="listEp-title">
                    list of contents
                </h2>
                <div className="listEp-episode">
                    <div className="listEp-episode-title">
                        <div className="title-ep">ตอนที่</div>
                        <div className="title-ep">ชื่อตอน</div>
                        <div className="title-ep">วันที่ลง</div>
                        <div className="title-ep">ถูกใจ</div>
                        <div className="title-null"></div>
                    </div>
                    <div className="listEp-episode-ep">
                        <EpisodeItem number={1}/>
                        <EpisodeItem number={2}/>
                        <EpisodeItem number={3}/>
                        <EpisodeItem number={4}/>
                        <EpisodeItem number={5}/>
                        <EpisodeItem number={6}/>
                        <EpisodeItem number={7}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListEpisodes;