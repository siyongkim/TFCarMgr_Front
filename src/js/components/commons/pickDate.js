import React from 'react';
import GetDate from './getDate';

class PickDate extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="well well-sm" style={{bgcolor:'#ffffff'}}>
            <center>
              <span style={{fontSize:'14px', fontWeight:'bold'}}><GetDate /></span>
            </center>
          </div>
        </div>
      </div>
    );
  }
}


export default PickDate;
