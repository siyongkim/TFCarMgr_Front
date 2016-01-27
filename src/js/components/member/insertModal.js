import React from 'react';

class InsertModal extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header" style={{padding: '20px 20px'}} align="center">
                    <span style={{fontSize : '26px'}}> 회원가입</span>
                </div>
                <div className="modal-body" style={{padding: '40px 50px'}}>
                    <form role="form">
                        <div className="form-group">
                            <label><span className="fa fa-user"></span>
                                 &nbsp;&nbsp;이 름</label> <input type="text" className="form-control" id="name"
                                placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label ><span className="fa fa-envelope"></span>
                                &nbsp;&nbsp;이메일</label> <input type="text" className="form-control" id="e-mail"
                                placeholder="E-mail" />
                        </div>
                        <div className="form-group">
                            <label><span className="fa fa-unlock-alt"></span>
                                &nbsp;&nbsp;비밀번호</label> <input type="password" className="form-control"
                                id="password" placeholder="Password" />
                            <br />
                            <input type="password" className="form-control" id="checkpassword"
                                placeholder="Confirm" />
                        </div>
                        <hr />
                        <button type="button" style={{bgcolor:'white',color:'white' ,border:'initial',fontWeight:'bold'}}
                            className="btn btn-primary btn-lg btn-block  fa" id="joinUser"
                            >회원가입</button>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-danger btn-default pull-left"
                        data-dismiss="modal" >
                        <span className="glyphicon glyphicon-remove"></span> 취소
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default InsertModal
