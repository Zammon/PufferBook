import { Component, useState } from "react";
import React from "react";
import './../../css/Tools/Butslide.css';
import iconLeft from './../../imagins/tools/left_button.png';
import iconRight from './../../imagins/tools/right_button.png';

const ButslideLeft = (props) => { 
    return(
        <div className="but-slides-click but-left" onClick={props.onclickset}>
            <img className="img-iconslide" src={iconLeft}/>
        </div>
    );
}

const ButslideRight = (props) => {
    return(
        <div className="but-slides-click but-right" onClick={props.onclickset}>
            <img className="img-iconslide" src={iconRight}/>
        </div>
    )
}

export {ButslideLeft, ButslideRight}