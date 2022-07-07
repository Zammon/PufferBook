import React, {Component, useEffect, useState } from "react";
import './../../css/Home/Noveldaily.css';
import novel1 from './../../imagins/novels/novel01.jpg';
import novel2 from './../../imagins/novels/novel02.jpg';
import novel3 from './../../imagins/novels/novel03.jpg';
import novel4 from './../../imagins/novels/novel04.jpg';
import novel5 from './../../imagins/novels/novel05.jpg';
import novel6 from './../../imagins/novels/novel06.jpg';
import novel7 from './../../imagins/novels/novel07.jpg';
import novel8 from './../../imagins/novels/novel08.jpg';
import novel9 from './../../imagins/novels/novel09.jpg';
import novel10 from './../../imagins/novels/novel10.jpg';
import iconnoveldaily from './../../imagins/icons/noveldaily.png';
import {ButslideLeft, ButslideRight} from './../Tools/Butslide'


function Noveldaily() {
    /* Objects */
    const novelDaily = [
        {
            id: 0,
            title:"ขาดคุณนางฟ้าข้างห้องไป...",
            synopsis:"เรื่องราวเกี่ยวกับ...01",
            imgs: novel1
        },
        {
            id:1,
            title:"ซ่อนคมเวท เจ็ดดาบมาร",
            synopsis:"เรื่องราวเกี่ยวกับ...02",
            imgs: novel2
        },
        {
            id:2,
            title:"Light Novel Ranking 2019",
            synopsis:"เรื่องราวเกี่ยวกับ...03",
            imgs: novel3
        },
        {
            id:3,
            title:"ผมเนี่ยนะ...ชายแปด!",
            synopsis:"เรื่องราวเกี่ยวกับ...04",
            imgs: novel4
        },
        {
            id:4,
            title:"ผมเนี่ยนะ...ชายแปด!",
            synopsis:"เรื่องราวเกี่ยวกับ...04",
            imgs: novel5
        },
        {
            id:5,
            title:"ผมเนี่ยนะ...ชายแปด!",
            synopsis:"เรื่องราวเกี่ยวกับ...04",
            imgs: novel6
        },
        {
            id:6,
            title:"ผมเนี่ยนะ...ชายแปด!",
            synopsis:"เรื่องราวเกี่ยวกับ...04",
            imgs: novel7
        },
        {
            id:7,
            title:"ผมเนี่ยนะ...ชายแปด!",
            synopsis:"เรื่องราวเกี่ยวกับ...04",
            imgs: novel8
        },
        {
            id:8,
            title:"ผมเนี่ยนะ...ชายแปด!",
            synopsis:"เรื่องราวเกี่ยวกับ...04",
            imgs: novel9
        },
        {
            id:9,
            title:"ผมเนี่ยนะ...ชายแปด!",
            synopsis:"เรื่องราวเกี่ยวกับ...04",
            imgs: novel10
        }
    ]

    const novelsBox = novelDaily.map((n,index)=>{
        return <NovelItems key={index} novels={n} />
    });

    const novellength = novelDaily.length;
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
                    <img className="noveldaily-slides-image" src={novels.imgs}/>
                <div className="noveldaily-slides-content">
                    <h4 className="noveldaily-slides-title">
                        {novels.title}
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