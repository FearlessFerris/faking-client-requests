// Boeing Component Implementation 


// Dependencies 
import React, { useState } from 'react';


// Components & Other Necessary Dependencies 
import BoeingLogo from './images/Boeing-Logo.png';


function Boeing() {

    return(
        <div> 
            <h1> Boeing Component </h1>
            <img src = { BoeingLogo } alt = 'Boeing Logo'></img>
        </div>
    )
}

export default Boeing;