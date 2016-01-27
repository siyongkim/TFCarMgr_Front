import React from 'react';
import {Link} from 'react-router';

class Menu extends React.Component{
  constructor(){
    super();
  }
  render(){
      return(
      <div className="container">
        <div className="row">
          <center>
          <Link to="configCar">
          <div className="well well-lg" style={{bgcolor:'#ffffff'}}>
            <span style={{color:'#00bcd4'}}><span className="fa fa-heart" style={{bgcolor:'#00bcd4', fontSize:'30px'}}></span></span>
             <font style={{fontSize:'30px'}}> &nbsp; 내 차</font>
            <br />
            <font style={{fontSize:'17px', fontWeight:'bold'}}>00가0000</font>
          </div>
          </Link>
          </center>
        </div>
        <div className="row">
          <center>
            <Link to="driveList">
              <div className="col-xs-6" id="menuLeft">
                <div className="well well-lg" style={{bgcolor:'#ffffff'}}>
                  <span style={{color:'#00bcd4'}}><span className="fa fa-car" style={{bgcolor:'#00bcd4', fontSize:'30px'}}></span></span>
                   <font style={{fontSize:'20px'}}>주행거리 </font>
                  <br />
                  <font style={{fontSize:'13px', fontWeight:'bold'}}>5km</font>
                </div>
              </div>
            </Link>
            <div className="col-xs-6" id="menuRight">
              <div className="well well-lg" style={{bgcolor:'#ffffff'}}>
                <span style={{color:'#00bcd4'}}><span className="fa fa-tint" style={{bgcolor:'#00bcd4', fontSize:'30px'}}></span></span>
                 <font style={{fontSize:'20px'}}> &nbsp; 주 유 </font>
                <br />
                <font style={{fontSize:'13px', fontWeight:'bold'}}>15리터</font>
              </div>
            </div>
            <div className="col-xs-6" id="menuLeft">
              <div className="well well-lg" style={{bgcolor:'#ffffff'}}>
                <span style={{color:'#00bcd4'}}><span className="fa fa-wrench" style={{bgcolor:'#00bcd4', fontSize:'30px'}}></span></span>
                 <font style={{fontSize:'20px'}}> &nbsp; 정 비 </font>
                <br />
                <font style={{fontSize:'13px', fontWeight:'bold'}}>3건/45만원</font>
              </div>
            </div>
            <div className="col-xs-6" id="menuRight">
              <div className="well well-lg" style={{bgcolor:'#ffffff'}}>
                <span style={{color:'#00bcd4'}}><span className="fa fa-book" style={{bgcolor:'#00bcd4', fontSize:'30px'}}></span></span>
                 <font style={{fontSize:'20px'}}> &nbsp; 기타 </font>
                <br />
                <font style={{fontSize:'13px', fontWeight:'bold'}}>3건/45만원</font>
              </div>
            </div>
          </center>
        </div>
        <div className="row">
          <center>
          <div className="well well-lg" style={{bgcolor:'#ffffff'}}>
            <span style={{color:'#00bcd4'}}><span className="fa fa-pencil" style={{bgcolor:'#00bcd4', fontSize:'30px'}}></span></span>
             <font style={{fontSize:'24px'}}> &nbsp;&nbsp;작성하기 </font>
          </div>
          </center>
        </div>
      </div>
      )
  }
};


export default Menu;
