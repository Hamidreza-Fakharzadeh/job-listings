import React,{useState}from 'react';
import './App.css';
import './Grid.css';
import Data from './data';
import Logo from './Logo';
import Language from './Language';
import Tool from './Tool';
import LanguSelect from './LanguSelect';

function App () {
  const[languageState, setLanguageState] = useState("");


  return (
    <div className="App">
      <div className="main container">
  <div className={languageState ? "show" : "hide"}>
    <span>{languageState}</span>
  </div>
        {Data.map (job => {
          return (
            
            <div key={job.id} className="column-main row">

              <div className="card-logo sm-col-12 lg-col-1">
                <Logo imgLogo={job.logo} className="loggo lg-col-1" />
              </div>
              

              <div className="card-main1 sm-col-12 lg-col-4">
                <div className="company">
                  <ul>
                    <li className="">{job.company}</li>
                    {job.new ? <li className="new">NEW!</li> : <li />}
                    {job.featured
                      ? <li className="featured">FEATURED</li>
                      : <li />}
                  </ul>

                </div>
                <h3 className="position">
                  {job.position}
                </h3>
                <ul className="metadata">
                  <li>{job.postedAt}</li>
                  <li>{job.contract}</li>
                  <li>{job.location}</li>
                </ul>
              </div>

              <div className="card-main2 sm-col-12 lg-col-4">
                <ul>
                  <li>{job.role}</li>
                  <li>{job.level}</li>
                  {job.languages.map ((language, index) => {
                    
                    return(
                      <Language key={index} language={language} setLanguageState={setLanguageState}
                    />
                    )
                  })}
                  
                  <Tool tooll={job.tools} />
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
