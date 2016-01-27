import React from 'react';
import ReactBootstrap from 'react-bootstrap';

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
            2016년01월01일
          </div>
        </div>
        <div className="col-xs-6" id="dateRight">
          <div className="well well-sm" style={{bgcolor:'#ffffff'}}>
            2016년01월31일
          </div>
        </div>
        </center>
      </div>
    );
  }
}

export default DatePicker;
