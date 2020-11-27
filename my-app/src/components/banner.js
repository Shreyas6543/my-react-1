import React, { Component } from 'react';

import banner from './../images/banner.jpg';




class Banner extends Component {
  render() {

  return (

    <div className="imgcont">
      <img src={banner} alt="Banner" className="banner"/>
    </div>


  );
}
}
export default Banner;
