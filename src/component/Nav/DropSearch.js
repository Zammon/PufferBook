import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './../../css/Nav/DropSearch.css';
import {novelsob} from './../../Objects/Novels';

function DropSearch(props) {
    // const [onChangeValues, setOnChangeValues] = useState(props.values);
    const nosearch = <div className="dropsearch-item-null">No recent searches.</div>;
    /* Return Main */
    return(
        <>
        <div className="boxs-content">
                <div className="dropsearch-left"></div>
                <div className="dropsearch-center">
                     {props.children}
                </div>
                <div className="dropsearch-right"></div>
            </div>
        </>
            
    );
}
    

    function SearchItem(props) {
        return(
            <Link to={`read/${props.novels.id}`} className="dropsearch-item color-text-item">
                    <div className="dropsearch-item-imgs">
                        <img src={props.novels.imgs} className="item-imgs"/>
                    </div>
                    <div className="dropsearch-item-texts">
                        {props.novels.name}
                    </div>
            </Link>
        );
    }

export default DropSearch
export { SearchItem };