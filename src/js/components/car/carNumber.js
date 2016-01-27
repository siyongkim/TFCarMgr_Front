import React from 'react';
import {Link} from 'react-router';
import Header from '../commons/app-header';

class CarNumber extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <Header title="차량번호 입력" btn="저장" />
        </div>
        <div className="row">
          <input type="text" className="form-control" id="carName" placeholder="차량의 번호를 입력하세요" />
        </div>
      </div>
    );
  }
}

export default CarNumber;
