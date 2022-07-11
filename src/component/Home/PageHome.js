import React from "react";
import Slideshow from "./Slideshow";
import './../../css/Home/PageHome.css';
import Noveldaily from "./Noveldaily";
import Footer from "../Foot/Footer";

function PageHome(){
    return(
        <section name="Homepage" className="basic-page">
            <Slideshow />
            <Noveldaily />
            <Footer />
        </section>
    );
}

export default PageHome