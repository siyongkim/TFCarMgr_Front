import React from 'react';
import LoginBtn from '../button/app-button';
import InsertBtn from '../button/app-insertButton';
import InsertModal from './insertModal';
import {Link} from 'react-router';

const Login = () =>{
    return(
      <div className="container">
        <InsertModal />
        <center>
        <div className="row">
          <h1>초 간단 차계부!</h1>
        </div>
        <div className="row">
          <Link to="login"><LoginBtn /></Link>
          <br />
          <InsertBtn />
        </div>
        </center>
      </div>
    );
  }
  export default Login;
