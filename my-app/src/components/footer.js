import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCookie } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faFacebook , faInstagram , faLinkedin, faPinterest , faTwitter , faYoutube } from '@fortawesome/free-brands-svg-icons'
const home = <FontAwesomeIcon icon={faHome} />;
const mail = <FontAwesomeIcon icon={faEnvelope} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const cookie = <FontAwesomeIcon icon={faCookie} />;
const shield = <FontAwesomeIcon icon={faUserShield} />;
const hand = <FontAwesomeIcon icon={faHandshake} />;
const fb = <FontAwesomeIcon icon={faFacebook} />;
const insta = <FontAwesomeIcon icon={faInstagram} />;
const linkin = <FontAwesomeIcon icon={faLinkedin} />;
const pint = <FontAwesomeIcon icon={faPinterest} />;
const twit = <FontAwesomeIcon icon={faTwitter} />;
const yt = <FontAwesomeIcon icon={faYoutube} />;

class Foot extends Component {
  render() {
  return (
  <div className="footer">
    <div className="foot1">
        <div className="foothead">
        Connect with Us
        </div>
        <div className="footbody">
           <i>{home}</i><a href="https://www.google.com/maps/search/MYVI,+LLC+29+Carriage+House+Lane+Country:+Saratoga+Springs+NY/@43.0923056,-73.7945454,17z/data=!3m1!4b1"><p>MYVI, LLC 29 Carriage House Lane Country: Saratoga Springs NY</p></a>
           <i>{mail}</i><a href="mailto:shrego@gmail.com"><p>shrego@gmail.com</p></a>
           <i>{phone}</i><a href="tel:098467231"><p>098467231</p></a>
        </div>
    </div>
    <div className="foot1">
        <div className="foothead">
        Company
        </div>
        <div className="footbody">
           <p>Demo Company</p>
        </div>
    </div>
    <div className="foot1">
        <div className="foothead">
        Important
        </div>
        <div className="footbody">
           <i>{ cookie }</i><p>Cookie Policy</p>
           <i>{ shield }</i><p>Privacy Policy</p>
           <i>{ hand }</i><p>Terms & Conditions</p>
        </div>
    </div>
    <div className="foot1">
        <div className="foothead">
        Find us on
        </div>
        <div className="footbody">
            <div className="social">
                <a href="facebook.com"><i>{fb}</i></a>
                <a href="facebook.com"><i>{insta}</i></a>
                <a href="facebook.com"><i>{linkin}</i></a>
                <a href="facebook.com"><i>{pint}</i></a>
                <a href="facebook.com"><i>{twit}</i></a>
                <a href="facebook.com"><i>{yt}</i></a>
            </div>
        </div>
    </div>

    <div className="copyright">© Copyright 2015 MyVi. All rights reserved.</div>
  </div>
  );
}
}
export default Foot;
