// Embraer Component Implementation 


// Dependencies 
import React, { useState } from 'react';


// Components & Other Necessary Files 
import EmbraerLogo from './images/Embraer-Logo.png';


function Embraer() {

    return(
        <div> 
            <h1> Embraer Component </h1>
            <img src = { EmbraerLogo } alt = 'Embraer Logo'></img> 
        </div>
    )
}

export default Embraer;