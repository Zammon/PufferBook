import React from "react";
import './../../css/Reading/PageReading.css';
import Introduction from './Introduction';
import ListEpisodes from "./ListEpisodes";
import Comments from './Comments';
import Footer from './../Foot/Footer';
import { novelsob } from './../../Objects/Novels'

function PageReading() {
    return(
        <>
        <div className="readposts-container">
            <div className="readpost-item">
            <Introduction product={novelsob}/>
            <ListEpisodes texts={novelsob}/>
            <Comments />
            </div>
        </div>
        <Footer />
        </>
        
    );
}

export default PageReading;