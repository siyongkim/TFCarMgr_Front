import React from 'react';
import Header from '../commons/app-header';
import {Link} from 'react-router';

class InsertCar extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <Header title="차량등록" btn="저장"/>
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
        </div>
      </div>
    );
  }
}

export default InsertCar;
