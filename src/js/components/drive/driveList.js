import React from 'react';
import DatePicker from '../commons/app-datepicker';
import Header from '../commons/app-header';

class DriveList extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <Header title='누적주행거리' btn='입력' target="insertDrive"/>
          <DatePicker />
        </div>
        <div className = "row">
          <span className="pull-left">날 짜</span>
          <span className="pull-right">누적주행거리</span>
        </div>
        <div className="row">
          <div className="list-group">
            <a href='#' className="list-group-item">Test</a>
            <a href='#' className="list-group-item">Test</a>
            <a href='#' className="list-group-item">Test</a>
          </div>
        </div>
      </div>
    );
  }
}

export default DriveList;
