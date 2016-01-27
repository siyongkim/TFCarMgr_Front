import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div className="row" style={{marginTop:'40px'}}>
        <div className="col-xs-6">
          <h4 className="title"><span className="fa fa-car"></span>{this.props.title}</h4>
        </div>
        <div className="col-xs-3 col-xs-offset-3">
          <Link to={this.props.target}>
          <button className="btn btn-primary">
            {this.props.btn}
          </button>
          </Link>
        </div>
      </div>
    );
  }
}
Header.propTypes={
  title: React.PropTypes.string,
  btn: React.PropTypes.string,
  target: React.PropTypes.string
}
Header.defaultProps={
  title: '차 계 부',
  btn : '설  정',
  target: '/'
}

export default Header;
