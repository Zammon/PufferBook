import React from "react";
import './../../css/Reading/PageReading.css';
import Introduction from './Introduction';
import ListEpisodes from "./ListEpisodes";
import Comments from './Comments';
import Footer from './../Foot/Footer';

function PageReading() {
    return(
        <div className="readposts-container">
            <Introduction />
            <ListEpisodes />
            <Comments />
            <Footer />
        </div>
    );
}

export default PageReading;