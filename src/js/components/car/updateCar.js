import React from 'react';
import Header from '../commons/app-header';
import {Link} from 'react-router';

class UpdateCar extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
    <div className="container">
        <div className="row">
          <Header title="차량수정" btn="저장" target="insertCar"/>
        </div>
        <div className="row">
          <Link to="carName">
            <div className="col-xs-6">
              <div className="well well-lg" style={{bgcolor:'#ffffff'}}>
                  <center>
                 <font style={{fontSize:'20px'}}>차량이름</font>
                 </center>
              </div>
            </div>
          </Link>
          <Link to="carNumber">
            <div className="col-xs-6">
              <div className="well well-lg" style={{bgcolor:'#ffffff'}}>
                <center>
                <font style={{fontSize:'20px'}}>차량번호</font>
                </center>
              </div>
            </div>
          </Link>
        <button className="btn btn-danger btn-block">삭제</button>
      </div>
    </div>
    );
  }
}

export default UpdateCar;
