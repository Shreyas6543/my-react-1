import React, { Component } from 'react';
import tool1 from './../images/tool1.png';
import tool2 from './../images/tool2.png';
import tool3 from './../images/tool3.png';

class Task extends Component {
  render() {
  return (
  <div className="taskcont">
    <div className="card">
      <img src={tool1} alt="Tool1"/>
      <h2>Describe your task</h2>
      <p>Tell your task. Book your task</p>
    </div>
    <div className="card">
      <img src={tool2} alt="Tool2"/>
      <h2>Choose an Expert</h2>
      <p>This helps us determine which expert is best for your task.</p>
    </div>
    <div className="card">
      <img src={tool3} alt="Tool3"/>
      <h2>Choose an Expert</h2>
      <p>This helps us determine which expert is best for your task.</p>
    </div>
  </div>
  );
}
}
export default Task;
