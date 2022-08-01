import React from "react";
import './../../css/Foot/Footer.css';

function Footer() {

    function Home() {
        return(
            <div className="footer-item-home">
                <div className="item-title">
                    หน้าหลัก
                </div>
                <ul className="item-subhead">
                    <li className="niti">นิยาย</li>
                    <li className="niti">อี-บุ๊ค</li>
                    <li className="niti">คอมมิค</li>
                </ul>
            </div>
        );
    }

    function Howto() {
        return(
            <div className="footer-item-howto">
               <div className="item-title">
                    วิธีใช้
                </div>
                <ul className="item-subhead">
                    <li className="niti">วิธีเติมเงิน</li>
                    <li className="niti">วิธีลงนิยาย</li>
                    <li className="niti">วิธีลงคอมมิค</li>
                    <li className="niti">คำถามที่เจอบ่อยๆ</li>
                </ul>
            </div>
        );
    }

    function Condition() {
        return(
            <div className="footer-item-condition">
                <div className="item-title">
                    เงื่อนไข
                </div>
                <ul className="item-subhead">
                    <li className="niti">เงื่อนไขการเป็นนักเขียน</li>
                    <li className="niti">เงื่อนไขถอนเงิน</li>
                    <li className="niti">เงื่อนไขให้บริการ</li>
                </ul>
            </div>
        );
    }

    function Other() {
        return(
            <div className="footer-item-other">
                <div className="item-title">
                        เพิ่มเติม
                </div>
                <ul className="item-subhead">
                    <li className="niti">ข่าวสาร</li>
                </ul>
            </div>
        );
    }

    function Socials() {
        return(
            <div className="footer-item-social">
               <div className="item-title mars">
                        ติดต่อ
                </div>
                <div className="item-subhead-social">
                    <div className="boxs"></div>
                    <div className="boxs"></div>
                    <div className="boxs"></div>
                </div>
            </div>
        );
    }

    function CopyrightSymbol() {
        return(
            <div className="footer-item-copyright">
                <h4 className="item-copyright-nameweb">PUFFER BOOK</h4>
                <h5 className="item-copyright-iconscopy">©puffer book official</h5>
            </div>
        );
    }

    return(
        <div className="footer-container">
            <div className="footer-item-top">
                <Home />
                <Howto />
                <Condition />
                <Other />
                <Socials />
            </div>
            <div className="footer-item-bottom">
                <CopyrightSymbol />
            </div>
        </div>
    );
}

export default Footer