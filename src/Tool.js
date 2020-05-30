import React from 'react';

function Tool (props) {
  return props.tooll.map ((tol, index) => {
    return <li key={index}>{tol}</li>;
  });
}

export default Tool;
