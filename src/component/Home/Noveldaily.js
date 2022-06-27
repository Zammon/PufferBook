import React from "react";
import './../../css/Home/Noveldaily.css'
import novel1 from './../../imagins/novels/novel01.jpg'
import novel2 from './../../imagins/novels/novel02.jpg'
import novel3 from './../../imagins/novels/novel03.jpg'
import novel4 from './../../imagins/novels/novel04.jpg'

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
        }
    ]

    /* functions */
    function NovelItems(props){
        return(
            <div className="noveldaily-slides-items">
                    <img className="noveldaily-slides-image" src={novelDaily[props.id].imgs}/>
                <div className="noveldaily-slides-content">
                    <h4 className="noveldaily-slides-title">
                        {novelDaily[props.id].title}
                    </h4>
                    <h5 className="noveldaily-slides-syn">
                        {novelDaily[props.id].synopsis}
                    </h5>
                </div>
                <button className="noveldaily-slides-button">
                        <h4>ติดตาม</h4>
                </button>
            </div>
        );
    }
    
    return(
        <div className="noveldaily-container">
            <div className="noveldaily-title">
                <img className="logo-noveldaily" src="logoPuffer.png"/>
                <h4 className="title-noveldaily">นิยายประจำวัน</h4>
            </div>
            <div className="noveldaily-slides-container">
                <NovelItems id={0} />
                <NovelItems id={1} />
                <NovelItems id={2} />
                <NovelItems id={3} />
                <NovelItems id={1} />
            </div>
            <hr />
        </div>
    );
}

export default Noveldaily