import React, { Component } from 'react';
import tool1 from './../images/tool1.png';
import tool2 from './../images/tool2.png';
import tool3 from './../images/tool3.png';

class Price extends Component {
  render() {
  return (
  <div className="pricecont">
        <h1>PAYMENT PRICING</h1>
     <div className="priceflex">
        <div className="price">
            <div className="priceiconbg"><div className="priceicon"/></div>
            <div className="pricetext"><br />
                <h2>Payment Price</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className="price">
            <div className="priceiconbg"><div className="priceicon2"/></div>
            <div className="pricetext"><br />
                <h2>Transparent Pricing</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className="price">
            <div className="priceiconbg"><div className="priceicon3"/></div>
            <div className="pricetext"><br />
                <h2>Cancellation Policy</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
     </div>
  </div>
  );
}
}
export default Price;
