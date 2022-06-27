import React from "react";
import Slideshow from "./Slideshow";
import './../../css/Home/PageHome.css';
import Noveldaily from "./Noveldaily";

function PageHome(){
    return(
        <section name="Homepage" className="basic-page">
            <Slideshow />
            <Noveldaily />
        </section>
    );
}

export default PageHome