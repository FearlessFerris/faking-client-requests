// Airbus Component Implementation 


// Dependencies 
import React, { useState } from 'react';


// Components & Other Necessary Files 
import AirbusLogo from './images/Airbus-Logo.png';



// Airbus Component 
function Airbus() {

    const [ showContent, setShowContent ] = useState();

    const displayContent = () => {
        setShowContent( prevState => !prevState );
    }

    return( 
        <div className = 'airbus-container'> 
            <img src = { AirbusLogo } alt = 'Airbus Logo'></img>
            <div className = 'airbus-page'> 
                <div className = 'section'> 
                    <h1> History </h1>
                    <p> 
                        With a 50-year track record of innovation, technological firsts and industry milestones, Airbus is a leader in designing, manufacturing and delivering aerospace products, services and solutions to a customer base that spans the globe – with operations for commercial aircraft, helicopters, defence, space and security.
                    </p>
                </div>
                <div className = 'section'>
                    <h1> Aircraft </h1>
                    <h3>Types of Aircraft Offered by Airbus:</h3>
                    <p>Airbus offers a diverse range of aircraft tailored to meet various needs in aviation.</p>

                <ul>
                    <li><strong>Airbus A320 Family:</strong> A320, A321, A319, A318</li>
                    <li><strong>Airbus A330:</strong> A330-200, A330-300</li>
                    <li><strong>Airbus A350 XWB:</strong> Advanced aerodynamics, composite materials, fuel-efficient engines</li>
                    <li><strong>Airbus A380:</strong> Double-deck design, four-engine configuration, luxurious amenities like onboard bars</li>
                    <li><strong>Airbus A220</strong> (formerly Bombardier CSeries): Narrow-body, twin-engine, medium-range capabilities</li>
                </ul>
                </div>
            </div>
        </div>
    )

}

export default Airbus;
