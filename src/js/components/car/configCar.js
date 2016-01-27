import React from 'react';
import Header from '../commons/app-header';
import {Link} from 'react-router';

class ConfigCar extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <Header title="차량설정" btn="추가" target="insertCar"/>
        </div>
        <div className="row">
          <center>
            등록된 차량 : 1대
            <div className="well well-lg" style={{bgcolor:'#ffffff', paddingTop:'0px', paddingBottom:'0px'}}>
              <span style={{color:'#00bcd4'}}><span className="fa fa-heart" style={{bgcolor:'#00bcd4', fontSize:'30px'}}></span></span>
               <font style={{fontSize:'30px'}}> &nbsp; 내 차</font>
               <br />
               <font style={{fontSize:'17px', fontWeight:'bold'}}>00가0000</font>
               <br />
               <div className="row">
                  <Link to="login">
                    <div className = "col-xs-5">
                      <button className="btn btn-primary btn-block">차계부 보기</button>
                    </div>
                  </Link>
                  <Link to="updateCar">
                    <div className = "col-xs-5 col-xs-offset-2">
                      <button className="btn btn-primary btn-block">편 집</button>
                    </div>
                  </Link>
                </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default ConfigCar;
