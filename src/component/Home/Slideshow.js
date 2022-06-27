import React from "react";
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
            imgs: {imgcover2}
        },
        {
            id: 3 ,
            title: 'Jobless Reincarnation',
            synopsis: '... about 3',
            imgs: {imgcover3}
        }
    ];

    const Covermaps = covers.map((title,index) => {
        return <SlideItems key={index}  cover={title} />
    })

    /*function*/
    function SlideItems(props) {
        const {cover} = props;
        
        return(
                <div className="slide-item">
                    <div className="slide-item-title">
                        {covers[0].title}
                        <p className="slide-item-syn">{covers[0].synopsis}</p>
                    </div>
                    <div className="slide-shadow"></div>
                    <img className="slide-item-img" src={covers[0].imgs} />
                </div>
            );   
    }

    function Butslide(props) {
        return(
            <div className={`but-item${props.active}`}>
                
            </div>
        );
    }


    return(
        <div className="slide-container">
            <SlideItems />
            <div className="but-container">
                <Butslide active="-active" />
                <Butslide active=""/>
                <Butslide active=""/>
                <Butslide active=""/>
            </div>
        </div>
    );  

}

export default Slideshow