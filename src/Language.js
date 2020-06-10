import React from 'react';

function Language (props) {

  
  
  
  const click = () => {
    props.setLanguageState(props.language)

  }
  
    return (
      <li onClick={click} >
        {props.language} 
        </li>
        
  
    )
  
}

export default Language;
