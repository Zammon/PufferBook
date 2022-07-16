import React from "react";
import './../../css/Reading/PageReading.css';
import Introduction from './Introduction';
import ListEpisodes from "./ListEpisodes";
import Comments from './Comments';
import Footer from './../Foot/Footer';
import { useParams } from "react-router-dom";
import { novelsob } from './../../Objects/Novels'

function PageReading() {
    const { postID } = useParams();
    const  productFil = novelsob.filter(notis=> notis.id===postID)
    
    
    return(
        <div className="readposts-container">
            <Introduction product={novelsob}/>
            <ListEpisodes />
            <Comments />
            <Footer />
        </div>
    );
}

export default PageReading;