import React from "react";
import Slideshow from "./Slideshow";
import './../../css/Home/PageHome.css';
import Noveldaily from "./Noveldaily";
import Footer from "../Foot/Footer";

function PageHome(){
    return(
        <div className="basic-page">
            <Slideshow />
            <div className="display-setting-center">
                <div className="div-center">
                    <Noveldaily />  
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PageHome