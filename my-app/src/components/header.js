import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'

function Header(){
  const[navbar, setNavbar] = useState(false);
  const[button, setButton] = useState(false);
  const[button1, setButton1] = useState(false);
  const[logo, setLogo1] = useState(false);

    const changeBackground= () =>{
    if (window.scrollY >=80){
    setNavbar(true);
    }
    else{
    setNavbar(false);
    }
    };

     const changeBorder= () =>{
    if (window.scrollY >=80){
    setButton(true);
    }
    else{
    setButton(false);
    }
    };

    const changeBorder1= () =>{
    if (window.scrollY >=80){
    setButton1(true);
    }
    else{
    setButton1(false);
    }
    };


    const changeLogo1= () =>{
    if (window.scrollY >=80){
    setLogo1(true);
    }
    else{
    setLogo1(false);
    }
    };

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeBorder);
    window.addEventListener('scroll', changeBorder1);
    window.addEventListener('scroll', changeLogo1);


  return (

    <div className={navbar? 'navbar active' : 'navbar'}>
      <div className={logo? 'logo active' : 'logo'} />


      <button type="submit" className={button? 'button active' : 'button'}>
        <FontAwesomeIcon icon={faUser}/>&nbsp;Login
      </button>
      <button type="submit" className={button1? 'button1 active' : 'button1'}>
        <FontAwesomeIcon icon={faPenFancy}/>&nbsp;Signup
      </button>

    </div>

  );
}

export default Header;
