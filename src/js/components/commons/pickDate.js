import React from 'react';


const GetDate = () => {
      let today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var day = today.getDay();
      // if(10 > dd){
      //   dd = '0'+dd
      // }
      // if(10> mm){
      //   mm = '0'+mm
      // }

      // today = yyyy+'년' + mm+'월'+dd+'일'+'('+day+')';
      // return(
      //   {today}
      // )

}

class PickDate extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div>
            // <GetDate />
          </div>
        </div>
      </div>
    );
  }
}


export default PickDate;
