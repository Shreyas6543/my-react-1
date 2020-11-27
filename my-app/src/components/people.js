import React, { Component } from 'react';
import man1 from './../images/man1.png';
import man2 from './../images/man2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const down = <FontAwesomeIcon icon={faChevronDown} />;
const up = <FontAwesomeIcon icon={faChevronUp} />;

class People extends Component {
constructor(){
  super();
  this.state = { showText: true }
}
operation()
{
this.setState({
showMe:!this.state.showMe
})
}

  render() {
  return (
  <div className="peoplecont">
   <h1>WHAT PEOPLE SAYING</h1>
   <div className="pplflex">
    <div className="pplcard">
        <img src={man1} alt="man1"/>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         <h5>HENDERSON Benjamen / <a className="blue">HENDERSON</a></h5>
    </div>
    <div className="pplcard">
        <img src={man2} alt="man2"/>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         <h5>HENDERSON Benjamen / <a className="blue">HENDERSON</a></h5>
    </div>
     <div className="pplcard">
        <img src={man1} alt="man1"/>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         <h5>HENDERSON Benjamen / <a className="blue">HENDERSON</a></h5>
    </div>
    </div>
    {
    this.state.showMe?
    <div className="pplflex">
    <div className="pplcard">
        <img src={man1} alt="man1"/>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         <h5>HENDERSON Benjamen / <a className="blue">HENDERSON</a></h5>
    </div>
    <div className="pplcard">
        <img src={man2} alt="man2"/>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         <h5>HENDERSON Benjamen / <a className="blue">HENDERSON</a></h5>
    </div>
     <div className="pplcard">
        <img src={man1} alt="man1"/>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         <h5>HENDERSON Benjamen / <a className="blue">HENDERSON</a></h5>
    </div>
    </div>
    :null
    }
    <div class="vm" onClick={()=>this.operation()}>
    {this.state.showMe === true? <i>{up}</i> : <i>{down}</i>}</div>
  </div>
  );
}
}
export default People;