import React, {Component, useEffect, useState } from "react";
import './../../css/Home/Noveldaily.css';
import { novelsob } from "../../Objects/Novels";
import iconnoveldaily from './../../imagins/icons/noveldaily.png';
import {ButslideLeft, ButslideRight} from './../Tools/Butslide'
import { Link } from "react-router-dom";


function Noveldaily() {
    /* Objects */

    const novelfils = novelsob.filter(ob=> ob.id>4) 

    const novelsBox = novelfils.map((n,index)=>{
        return <NovelItems key={index} novels={n} />
    });

    const novellength = novelfils.length;
    /*usestate*/
    /*SlidePage ->*/
    let [slidepage, setSlidePage] = useState(0);

    /* functions */
    function onbuttonleft() {
        if(slidepage===0){
            setSlidePage(0)
        }else{
            setSlidePage(slidepage - 1);  
        }  
    }
    
    function onbuttonright() {
        if(slidepage===(novellength/5)-1){
            setSlidePage(slidepage);
        }else{
            setSlidePage(slidepage + 1);
        }
    }
    
    function NovelItems(props){
        const { novels } = props;

        return(
            <div className="noveldaily-slides-items">
                <Link as={Link} to={`/read/${novels.id}`}>
                    <img className="noveldaily-slides-image" src={novels.imgs}/>
                </Link>
                <div className="noveldaily-slides-content">
                    <h4 className="noveldaily-slides-title">
                        {novels.name}
                    </h4>
                    <h5 className="noveldaily-slides-syn">
                        {novels.synopsis}
                    </h5>
                </div>
                <button className="noveldaily-slides-button">
                        <h4>ติดตาม</h4>
                </button>
            </div>
        );
    }

    /* Return MainFunction */ 
    return(
        <div className="noveldaily-container-main">
            <div className="noveldaily-title">
                <div className="noveldaily-title-left">
                    <img className="logo-noveldaily" src={iconnoveldaily}/>
                    <h4 className="title-noveldaily">นิยายประจำวัน</h4>
                </div>
                <div className="noveldaily-title-right">
                   ดูเพิ่มเติม
                </div>
            </div>
            <div className="noveldaily-slides-container">
            <ButslideLeft sta={slidepage} onclickset={onbuttonleft}/>
            <div className="noveldaily-rowslide" style={{ transform: `translate3d(${-slidepage * 101}%, 0, 0)` }}>
              {novelsBox}  
            </div>
            <ButslideRight sta={slidepage} onclickset={onbuttonright}/>
            </div>
        </div>
    );
}

export default Noveldaily