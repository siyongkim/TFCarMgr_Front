import React from 'react';

class GetDate extends React.Component{
  constructor(){
    super();
  }
  render(){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let date = today.getDate();
    if(this.props.flag===`first`){
      date = 1;
    }else if(this.props.flag===`last`){
      if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ){
        date = 31;
      }else if(month === 4 || month === 6 || month === 9 || month === 11){
        date = 30;
      }else{
        date = 28;
      }
    }
    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    let day = week[new Date(`${year}-${month}-${date}`).getDay()];

    if(month < 9){
      month = `0`+ month;
    }
    if(date < 9){
      date = `0`+ date;
    }

    return(
      <span>{`${year}년 ${month}월 ${date}일 (${day})`}</span>
    );
  }
}
GetDate.propTypes={
  flag:React.PropTypes.string
}
export default GetDate ;
