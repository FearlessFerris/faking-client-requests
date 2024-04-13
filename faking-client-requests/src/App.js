// Main Application 


// Dependencies 
import './App.css';
import React, { useState } from 'react';


// Components & Other Necessary Files 
import Airbus from './Airbus';
import Boeing from './Boeing';
import Embraer from './Embraer';


// Application 
function App() {

  const [ page, setPage ] = useState( '1' );

  const goToPage = ( newPage ) => {
    setPage( newPage );
  }

  const displayPage = () => {
    if( page === '1' ) return <Airbus /> 
    if( page === '2' ) return <Boeing /> 
    if( page === '3' ) return <Embraer /> 
  }

  return (
    <div className="App">
      <nav> 
        <a onClick = { () => goToPage( '1' ) }> Airbus </a>
        <a onClick = { () => goToPage( '2' ) }> Boeing </a>
        <a onClick = { () => goToPage( '3' ) }> Embraer </a>
      </nav>
      { displayPage() }
    </div>
  );
}

export default App;
