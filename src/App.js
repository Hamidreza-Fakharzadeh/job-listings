import React from 'react';
import './App.css';
import './Grid.css';
import Data from './data';
import Logo from './Logo';
import Language from './Language';
import Tool from './Tool';

function App () {
  return (
    <div className="App">
      <div className="main container">
        {Data.map (obj => {
          return (
            <div key={obj.id} className="column-main row">

              <div className="card-logo sm-col-12 lg-col-1">
                <Logo imgLogo={obj.logo} className="loggo lg-col-1" />
              </div>

              <div className="card-main1 sm-col-12 lg-col-4">
                <div className="company">
                  <ul>
                    <li className="">{obj.company}</li>
                    {obj.new ? <li className="new">NEW!</li> : <li />}
                    {obj.featured
                      ? <li className="featured">FEATURED</li>
                      : <li />}
                  </ul>

                </div>
                <h3 className="position">
                  {obj.position}
                </h3>
                <ul className="metadata">
                  <li>{obj.postedAt}</li>
                  <li>{obj.contract}</li>
                  <li>{obj.location}</li>
                </ul>
              </div>

              <div className="card-main2 sm-col-12 lg-col-4">
                <ul>
                  <li>{obj.role}</li>
                  <li>{obj.level}</li>
                  <Language langu={obj.languages} />
                  <Tool tooll={obj.tools} />
                </ul>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
