import React, { useEffect, useState, useRef } from "react";
import './../../css/Home/Slideshow.css'
import imgcover1 from './../../imagins/CoverSlide_1.jpg'
import imgcover2 from './../../imagins/CoverSlide_2.jpg'
import imgcover3 from './../../imagins/CoverSlide_3.jpg'


function Slideshow() {
    /*Object*/
    const covers = [
        {
            id: 1 ,
            title: 'Heartstopper',
            synopsis: 'Charlie Spring เด็กเนิร์ดที่เปิดตัวว่าเป็นเกย์คนเดียวในโรงเรียน และ Nicholas Nelson เด็กหนุ่มนักกีฬารักบี้ขี้อาย ซึ่งต้องนั่งติดกันในคลาสเรียนวิชาหนึ่ง แวบแรกที่พบกัน ชาร์ลีผู้เคยโดนคนทั้งโรงเรียนบูลลี่เพราะเป็นเกย์ก็คิดว่า นิกจะเป็นเหมือนเด็กผู้ชายห้าวเป้งคนอื่นๆ',
            imgs: imgcover1
        },
        {   
            id: 2 ,
            title: 'SPY x Family',
            synopsis: '... about 2',
            imgs: imgcover2
        },
        {
            id: 3 ,
            title: 'Jobless Reincarnation',
            synopsis: '... about 3',
            imgs: imgcover3
        }
    ];
    /* Map Covers */
    const covermaps = covers.map((title,index) => {
        return <SlideItems key={index}  cover={title} />
    })
    /* Map Points */
    const pointmaps = covers.map((_,indexs)=>{
        return <Butslide key={indexs} inx={indexs}/>
    })
    /* Setting Delay */
    const delay = 3000;
    
    /*  UseStates */
    const [slidess, setSlidess] = useState(0);
    
    /* UseRefs */
    const timeoutRef = useRef(null);

    useEffect(()=>{
        resetTimeout();
        timeoutRef.current = setTimeout(
            ()=>
            setSlidess((prevIndex)=> prevIndex === covers.length - 1 ? 0 : prevIndex + 1 
            ),delay);

        return () => { resetTimeout() };
    }, [slidess]);
    
    function resetTimeout() {
            if(timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }

    /*function*/
    function SlideItems(props) {
        const {cover} = props;
        
        return(
                <div className="slide-item">
                    <div className="slide-item-title">
                        {cover.title}
                        <p className="slide-item-syn">{cover.synopsis}</p>
                    </div>
                    <div className="slide-shadow"></div>
                    <img className="slide-item-img" src={cover.imgs} />
                </div>
            );   
    }

    function Butslide(props) {
        return(
            <div className={`but-item${slidess===props.inx ? "-active" : ""}`} onClick={()=>{setSlidess(props.inx)}}></div>
        );
    }


    return(
        <div className="slide-container">
                <div className="slideshow-container" style={{ transform: `translate3d(${-slidess * 100}%, 0, 0)`}}>
                    {covermaps}
                </div>
            <div className="but-container">
                {pointmaps}
            </div>
        </div>
    );  

}

export default Slideshow