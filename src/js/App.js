import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '초간단 차계부',
      btnTxt: '설정'
    }
  }
  updateTitle(e){
    this.setState({title: e})
  }


  render(){
    return(
    <div className="container">
      <div className="row">
        <br />
        <div className="col-xs-6 col-xs-offset-1">
          <h4 className="title">
            <span className="fa fa-car"></span> &nbsp;&nbsp;
            {this.state.title}</h4>
        </div>
        <div className="col-xs-3 col-xs-offset-2">
          <button className="btn btn-primary">
            {this.state.btnTxt}
          </button>
        </div>
      </div>
        <br />
      <div className="row">
        <div className="col-xs-5 col-xs-offset-1"> 날짜1</div>
        <div className="col-xs-5 col-xs-offset-1"> 날짜2</div>
      </div>
    </div>
    )
  }
}

export default App
