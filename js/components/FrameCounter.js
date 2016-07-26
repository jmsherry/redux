import React, {
  Component
} from 'react';

class FrameCounter extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="frame-counter">
        <p><span className="frameScore">0</span> - <span className="frameScore">0</span></p>
      </div>
    );
  }
}

export default FrameCounter;
