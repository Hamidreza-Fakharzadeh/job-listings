import React from 'react';

function Language (props) {
  return props.langu.map ((len, index) => {
    return (
      <li key={index}>
        {len}

      </li>
    );
  });
}

export default Language;
