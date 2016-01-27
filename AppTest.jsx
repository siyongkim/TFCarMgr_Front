import React from 'react';

var App = React.createClass({
  getInintialState:function(){
    return {state:
      [txt: 'this is dafault',
      cat: 5]
    };
  },
  render: function(){
    return
    <div className="app">
      <input type="text"
        onChange={this.update.bind(this)} />
      <h1>this.state.txt</h1>
    </div>
  },
  update:function(e){
    this.setState({txt: e.target.value});
  }
});

React.render(<App />, document.body);
