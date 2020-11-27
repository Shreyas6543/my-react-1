import React, { Component } from 'react';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//css
import './Assets/css/min.css';
//components
import Header from './components/header.js'
import Banner from './components/banner.js'
import Task from './components/task.js'
import People from './components/people.js'
import Price from './components/pricing.js'
import Foot from './components/footer.js'

class App extends Component {

  render() {
  return (
  <Router>
    <div className="App">
     <Header />

     <Banner />
     <Task />
     <People />
     <Price />
     <Foot />
    </div>
   </Router>
  );
}
}
export default App;
