import React from 'react';
import GetDate from './getDate'
class DatePicker extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="row">
        <center>
        <div className="col-xs-6" id="dateLeft">
          <div className="well well-sm" style={{bgcolor:'#ffffff'}}>
            <span style={{fontSize:'14px', fontWeight:'bold'}}><GetDate flag='first'/></span>
          </div>
        </div>
        <div className="col-xs-6" id="dateRight">
          <div className="well well-sm" style={{bgcolor:'#ffffff'}}>
            <span style={{fontSize:'14px', fontWeight:'bold'}}><GetDate flag='last'/></span>
          </div>
        </div>
        </center>
      </div>
    );
  }
}

export default DatePicker;
