import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import Header from './commons/app-header';
import Menu from './menu/app-menu';
import LogoutBtn from './button/app-logoutbtn';
import Login from './member/login';
import {Router, Route, IndexRoute, Link} from 'react-router';
import ConfigCar from './car/configCar';
import InsertCar from './car/insertCar';
import UpdateCar from './car/updateCar';
import CarName from './car/carName';
import CarNumber from './car/carNumber';
// import PickDate from './commons/pickDate';


var Template = React.createClass({
  render:function(){
    return(
      <div className="container">
        <div className="row">
          <Header />
          
        </div>
        <br />
        <div className="row">
      <div>
        <Menu />
            <br/>
            <Link to="/"><LogoutBtn /></Link>
      </div>
    </div>
  </div>
    )
  }
});

var App = React.createClass({
  render:function(){
    return(
      <Router>
        <Route path="/" component={Login} />
        <Route path="login" component={Template} />
        <Route path="configCar" component={ConfigCar} />
        <Route path="insertCar" component={InsertCar} />
        <Route path="carName" component={CarName} />
        <Route path="carNumber" component={CarNumber} />
        <Route path="updateCar" component={UpdateCar} />
      </Router>
    )
  }
});

module.exports = App;
