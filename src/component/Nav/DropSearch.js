import React, { useState } from "react";
import './../../css/Nav/DropSearch.css'

function DropSearch(props) {
    return(
            <div className="boxs-content">
                <div className="dropsearch-left"></div>
                <div className="dropsearch-center">
                    <div className="dropsearch-item-null">No recent searches.</div>
                </div>
                <div className="dropsearch-right"></div>
            </div>
            
    );
}

export default DropSearch