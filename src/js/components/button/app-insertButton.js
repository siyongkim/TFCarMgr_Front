import React from 'react';

class InsertBtn extends React.Component{
  render(){
    return(
      <div className="row">
          <center>
            <button className="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#myModal">
              JOIN
            </button>
          </center>
      </div>
    )
  }
};

export default InsertBtn;
