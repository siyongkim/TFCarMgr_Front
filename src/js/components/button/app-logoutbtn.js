import React from 'react';

class LogoutBtn extends React.Component{
  render(){
    return(
      <div className="row">
          <center>
            <button className="btn btn-danger btn-lg btn-block">
              Logout
            </button>
          </center>
      </div>
    )
  }
};

export default LogoutBtn;
