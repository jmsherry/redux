import React, {Component} from 'react';

class Main extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <main>
        <h1>I am main</h1>
        {/* add this */}
        {this.props.children}
      </main>
    )
  }
};

export default Main;
