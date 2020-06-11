import React,{useState}from 'react';
import './App.css';
import './Grid.css';
import Data from './data';
import Logo from './Logo';
import Language from './Language';


function App () {
  const[languageState, setLanguageState] = useState([]);
  const[allData, setAllData] = useState(Data);

  const allDataRender = () => {
    const filtered = allData.filter((el) => {
      
      return languageState.indexOf(el.languages) > 0;
    } 
  
    )
    console.log(filtered);
    
    setAllData(filtered)

    
    
  }


  
  const addlanguage = (myArr) => {
    if(!languageState.includes(myArr)) {
      setLanguageState((languageState) => 
          [...languageState, myArr]
      )
    }
  } 

  return (
    <div className="App">
      <div className="main container">
        <header className="header"></header>
          <div className={languageState ? "show" : "hide"}>
            {languageState.map((languageSelected, index) => {
              return(
                <button key={index} onClick={allDataRender}>{languageSelected}</button>
              )
              })
            }
            </div>

            {Data.map(job => {
              const myArr = [job.role,job.level]
              job.languages.map(language => 
              myArr.push(language)
              )
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
                      {myArr.map ((language, index) => {
                        
                          return(
                            <Language key={index} language={language} setLanguageState={addlanguage}
                          />
                          )
                        })
                      }
                      
                          
                    </ul>

                  </div>

                </div>
              );
            })
          }
          
        </div>
        </div>
      );

}
export default App;
