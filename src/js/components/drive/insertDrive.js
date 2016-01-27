import React from 'react';
import Header from '../commons/app-header';
import PickDate from '../commons/pickDate';

class InsertDrive extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <Header title="주행거리 입력" btn="저장" target="driveList"/>
          <PickDate />
          <div>
            keyPad
          </div>
        </div>
      </div>
    );
  }
}

export default InsertDrive;
